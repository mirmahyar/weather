import React from "react";

export default function SearchBox() {
    return (
        <form className="form">
            <label className="label" htmlFor="query">City Name: </label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Tehran" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}