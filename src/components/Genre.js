import React, { useState } from 'react';
import { useEffect } from 'react';

function Genre(props) {
    let [isLoaded, setLoaded] = useState(false);
    let [genres, setGenres] = useState([]);

    useEffect(function () {
        (async function () {
            let response = await fetch("https://react-backend101.herokuapp.com/genres");
            response = await response.json();
            // console.log(response);
            setLoaded(true);
            setGenres(response.genres);
        })();
    }, []);

    // console.log(genres);

    const sendGenre = (e) => { //send to main file
        // console.log(e.target.innerText);
        props.getGenre(e.target.innerText);
    }

    let allGenres = (
        genres.map((genre, idx) => {
            return (
                <div key={genre._id} className="border-2 w-40 h-10 text-center font-semibold border-t-0 flex items-center justify-center cursor-pointer" onClick={sendGenre}>{genre.name}</div>
            )
        })
    )

    return (
        <div className="genre mr-8">
            <div className="border-2 w-40 h-10 text-center font-semibold flex items-center justify-center cursor-pointer" onClick={sendGenre}>All Genres</div>
            {isLoaded === false ? <div className="border-2 w-40 h-10 text-center border-t-0 flex items-center justify-center">Loading...</div> : allGenres}
        </div>
    )
}

export default Genre;