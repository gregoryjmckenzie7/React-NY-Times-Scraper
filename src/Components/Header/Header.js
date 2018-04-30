import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
    <div>
        <div className="header">
            <h1 className="title">New York Times Article Scraper</h1>
            <h3 className="sub">Search for and annontate articles of interest!</h3>
        </div>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="saved">Saved</Link>        
    </div>

)

export default Header;