import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
    <div>
        <h1>New York Times Article Scraper</h1>
        <h3>Search for and annontate articles of interest!</h3>
        <Link to="saved">Saved</Link>
        <Link to="/">Home</Link>
    </div>

)

export default Header;