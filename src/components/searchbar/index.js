import React from "react";
import { Link, useLocation } from "react-router-dom";

function SearchBar(props) {
    return (
        <form>
            <div className="container">
                <div className="align-items-center">
                    <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="search"
                    type="text"
                    placeholder="Search By Name"
                    ></input>
                    <button type="submit" onClick={props.handleFormSubmit}>Search!</button>
                </div>
            </div>
        </form>
    )
    
}

export default SearchBar;