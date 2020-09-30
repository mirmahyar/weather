import React, { useState } from "react";

function SearchBox() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(0);

    const SearchWeather = async (e) => {
        e.preventDefault();
        console.log("Submitting...")


        const key = "0443b36ad2bf74d27d89bf3bbe003dd5"

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=0443b36ad2bf74d27d89bf3bbe003dd5`;
        // const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            setWeather(data.coord.lat);
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
            <p>
                {weather}
            </p>


        </div>
    )
}



export default SearchBox
