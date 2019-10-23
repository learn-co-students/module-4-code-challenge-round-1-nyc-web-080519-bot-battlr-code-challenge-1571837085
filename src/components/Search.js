import React from 'react'

const Search = (props) => {
    return (
        <form className="search-form">
            Search:
            <br></br>
            <input className="search-input" type="text" placeholder="Search" onChange={(event) => props.changeHandler(event)} value={props.searchTerm}/>
        </form>
    )
}

export default Search