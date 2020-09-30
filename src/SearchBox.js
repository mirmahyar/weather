import React, { useState } from "react";

function SearchBox() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');

    const SearchWeather = async (e) => {
        e.preventDefault();
        console.log("Submitting...")

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=0443b36ad2bf74d27d89bf3bbe003dd5`;

        try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            setWeather(data.weather[0].description);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <form className="form" name="weather" onSubmit={SearchWeather} data-netlify="true">
                <label className="label" htmlFor="query">City name : </label>
                <input className="input" type="text" placeholder="i.e Tehran"
                    value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="button" type="submit">Search</button>
            </form>
            <p className="description">
                {weather}
            </p>
        </div>
    )
}



export default SearchBox


