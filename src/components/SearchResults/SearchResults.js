import React from 'react';


export const SearchResults = props => { 
    
        return(
            <div className="row searchResult">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
                            <p>{props.snippet}</p>
                            <a href={props.web_url} target="_blank">View Article</a>
                            <button type="button" className="btn btn-outline-success float-right" onClick={() => props.save(props.snippet, props.web_url, props.date, props._id)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
    

export default SearchResults;