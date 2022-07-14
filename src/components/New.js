import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';

function New() {
    let [movieName, setMovieName] = useState("");
    let [movieYear, setMovieYear] = useState("");
    let [moviePlot, setPlot] = useState("");
    let [type, setType] = useState("");
    let [details, setDetails] = useState({});
    let [isLoaded, setLoaded] = useState(false);

    const handleMovieChange = (e) => {
        setMovieName(e.target.value);
    }

    const handleYearChange = (e) => {
        setMovieYear(e.target.value);
    }

    const handleType = (e) => {
        setType(e.target.value);
    }

    const handlePlot = (e) => {
        setPlot(e.target.value);
    }

    const getMovieDetails = async (e) => {
        e.preventDefault()
        let movie = movieName.split(" ").join("+");
        console.log(movieName + " " + movieYear + " " + moviePlot + " " + type);
        let link = `http://www.omdbapi.com/?${movieName !== '' ? `t=${movie}&` : ``}${movieYear !== '' ? `y=${movieYear}&` : ``}${moviePlot !== '' ? `plot=${moviePlot}&` : ``}${type !== '' ? `type=${type}&` : ``}apikey=ec3de2af`;
        // console.log(link);
        const movieData = await fetch(link);
        const data = await movieData.json();
        // console.log(data);
        setLoaded(true);
        setDetails(data);
    }


    const imageStyle = {
        height: "500px",
        width: "100%",
        objectFit: "stretch"
    }

    let card = (
        <div class="max-w-sm rounded overflow-hidden shadow-xl border-2 border-gray-300">
            <img class="w-full" src={details.Poster} style={imageStyle} alt="Sunset in the mountains"></img>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{details.Title}</div>
                <p class="text-gray-700 text-base border-b-2 border-t-2 border-gray-300">
                    {details.Plot}
                </p>
                <div class="border-b-2 border-gray-300"><span class="font-bold">Actors </span><span>{details.Actors}</span></div>
                <div class="border-b-2 border-gray-300"><span class="font-bold">Director </span><span>{details.Director}</span></div>
                <div class="border-b-2 border-gray-300"><span class="font-bold">Genres </span><span>{details.Genre}</span></div>
                <div class="border-b-2 border-gray-300"><span class="font-bold">Released </span><span>{details.Released}</span></div>
                <div class="border-b-2 border-gray-300"><span class="font-bold">Country </span><span>{details.Country}</span></div>
                <div class="border-b-2 border-gray-300"><span class="font-bold">IMDB </span><span>{details.imdbRating}</span></div>
                <div class="border-b-2 border-gray-300"><span class="font-bold">Metascore </span><span>{details.Metascore}</span></div>
                <div class="border-b-2 border-gray-300"><span class="font-bold">Box-Office </span><span>{details.BoxOffice}</span></div>
                <div class="border-b-2 border-gray-300"><span class="font-bold">Awards </span><span>{details.Awards}</span></div>
                <div class="border-b-2 border-gray-300"><span class="font-bold">Language </span><span>{details.Language}</span></div>
            </div>
        </div>
    )

    return (
        <>
            <Navbar />
            <div className='new m-3 w-4/5 mx-auto flex justify-around'>
                <form class="flex flex-col justify-center shadow-xl w-2/5 h-4/5 rounded px-3 py-3 font-bold border-2 border-gray-300">
                    <h1 className='text-3xl font-semibold text-center border-b-2 uppercase border-yellow-400'>Get Details</h1>
                    <div>
                        <div className='flex items-center'>
                            <label for="name" className='font-semibold text-2xl w-16 mr-3 text-gray-700'>Title</label>
                            <input placeHolder="Search Movie" className="text-gray-800 focus:outline-none focus:ring focus:ring-violet-300 border-2 border-yellow-400 rounded py-1 px-3 my-3 w-full text-gray-700 font-semibold" id="name" type='text' value={movieName} onChange={handleMovieChange}></input>
                        </div>
                        <div className='flex items-center'>
                            <label for="year" className='font-semibold text-2xl w-16 mr-3 text-gray-700'>Year</label>
                            <input placeHolder="Release Year" className="text-gray-800 focus:outline-none focus:ring focus:ring-violet-300 border-2 border-yellow-400 rounded py-1 px-3 my-3 w-full text-gray-700 font-semibold" id="year" type='text' value={movieYear} onChange={handleYearChange}></input>
                        </div>
                        <div className='flex items-center'>
                            <label for="plot" className='font-semibold text-2xl w-16 mr-3 text-gray-700'>Plot</label>
                            <select value={moviePlot} class="focus:outline-none focus:ring focus:ring-violet-300 border-2 border-yellow-400 rounded py-1 px-2 my-3 w-full text-gray-700 font-semibold" id="plot" onChange={handlePlot}>
                                <option value="">Select Plot</option>
                                <option value="full">Full</option>
                                <option value="short">Short</option>
                            </select>

                        </div>
                        <div className='flex items-center'>
                            <label for="type" className='font-semibold text-2xl w-16 mr-3 text-gray-700'>Type</label>
                            <select value={type} class="focus:outline-none focus:ring focus:ring-violet-300 border-2 border-yellow-400 rounded py-1 my-3 px-2 w-full text-gray-700 font-semibold" id="type" onChange={handleType}>
                                <option value="">Select Type</option>
                                <option value="movie">Movie</option>
                                <option value="series">Series</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' className="bg-yellow-300 px-6 py-2 border-2 border-yellow-500 hover:bg-yellow-400 rounded  font-bold uppercase text-gray-700" onClick={getMovieDetails}>Submit</button>
                </form>
                <div className='card'>
                    {isLoaded === false || details.Response === "False" ? <div className='shadow-xl border-2 border-gray-300 rounded py-2 px-6'>Movie's Details Not Available</div> : <div>{card}</div>}
                </div>
            </div>
        </>
    )
}

export default New;