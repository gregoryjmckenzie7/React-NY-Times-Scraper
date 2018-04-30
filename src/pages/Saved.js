import React from "react";
import axios from "axios";
import SearchResults from "./../components/SearchResults/SearchResults";

class Saved extends React.Component {

    constructor() {
        super()
        this.state = {
            savedArticles: []
        }
    }

    getArticle() {
        axios
            .get("/api/articles")
            .then(data => this.setState({ savedArticles: data.data }))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getArticle()
    }

    deleteArticles = (title, url, date, id) => {
        axios
            .delete(`/api/articles/${id}`)
            .then(data => {
                console.log(data)
                this.getArticle()
            })
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                {
                    this.state.savedArticles.map(e => {
                        return <SearchResults
                        save={this.deleteArticles}
                        button="Delete from Saved"
                        snippet={e.title}
                        _id={e._id}
                        web_url={e.href}/>
                    })
                }
            </div>
        )
    }
}

export default Saved;