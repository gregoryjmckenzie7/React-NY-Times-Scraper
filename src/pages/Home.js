import React from "react";
import axios from "axios";
import Search from "./../components/Search/Search"
import SearchResults from "./../components/SearchResults/SearchResults"

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            query: "",
            start: "", 
            end: "", 
            key: "0fba3f9bc3144cc7a0e05ceacdc04817",
            articles: []
        }
    }

    startSearch = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
    }

    getArticles = () => {
        console.log(this.state.start)
        console.log(this.state.end)
        axios
            .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.query}&api-key=0fba3f9bc3144cc7a0e05ceacdc04817&begin_date=${this.state.start + "0101" || 15000202}&end_date=${this.state.end + "1229" || 30000101}`)
            .then(data => {
                console.log(data.data.response.docs)
                this.setState({ articles: data.data.response.docs })
            })
            .catch(err => console.log(err))
    }
    saveArticles = (title, date, href) => {
        axios
            .post("api/articles", {
                title: title,
                date: date,
                href: href
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <Search set={this.startSearch} update={this.getArticles} state={this.state}/>
                {
                    this.state.articles.map(e => {
                        return <SearchResults save={this.saveArticles} button="Save Article" date={e.pub_date} snippet={e.snippet} key={e._id} web_url={e.web_url}/>
                    })
                }
            </div>
        )
    }
}

export default Home;
