import React from "react";
import "./Search.css";

class Search extends React.Component {

    render() {
        return(
            <div>
                <div className="search-container">
                    <label className="label" htmlFor="query">Search</label>
                    <input className="input" id="searchTerm" type="text" name="query" placeholder="Search Topic" value={this.props.state.query} onChange={this.props.set}/>
                    <br />
                    <label className="label" htmlFor="start">Start Year</label>
                    <input className="input" id="startDate" type="text" name="start" placeholder="YYYY" value={this.props.state.start} onChange={this.props.set}/>
                    <br />
                    <label className="label" htmlFor="end">End Year</label>
                    <input className="input" id="endDate" type="text" name="end" placeholder="YYYY" value={this.props.state.end} onChange={this.props.set}/>
                    <br />
                    <button className="searchButton" variant="raised" color="primary" onClick={this.props.update}>Search</button>
                </div>
            </div>
        )
    }
}

export default Search;