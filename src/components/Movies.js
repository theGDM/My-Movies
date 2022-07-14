import React, { useState } from 'react'
import InputBox from './InputBox';
import MoviesTable from './MoviesTable';
import Pagination from './Pagination';
import { useEffect } from 'react';

function Movies(props) {
    let [sText, setSearchText] = useState("");
    let [numberOfMoviesInPage, setNumberOfMoviesInPage] = useState(4);
    //as we are bringing the data from the backend
    //initially loading happens, so isLoaded is false, show loading status
    const [isLoaded, setLoaded] = React.useState(false);
    const [movies, setMovies] = React.useState([]);
    const [cPage, setCpage] = React.useState(1);

    //it will run after rendering is done, only once, and then again rendering will happen
    useEffect(function () {
        (async function () {
            //fetch is inbuilt feature of browser that makes the request to the url, to get data
            let response = await fetch("https://react-backend101.herokuapp.com/movies");
            response = await response.json();
            // console.log(response);
            setLoaded(true); //since data is loaded, now make isLoaded as true
            // setContent(JSON.stringify(response)); //stringify the response received
            setMovies(response.movies);
        })();
    }, []);

    const setSearchTextHandler = (text) => {
        setSearchText(text);
        // console.log("Search Text : " + text);
    }

    const setNumOfMovInPageHandler = (num) => {
        setNumberOfMoviesInPage(num);
        setCpage(1); //most important, as soon as the inputbox value changes, make the default page as one
        // console.log("Number of movies : " + num);
    }

    const deleteMovie = (rid) => {
        let moviesAfterDelete = movies.filter(movie => {
            return movie._id != rid;
        })

        setMovies(moviesAfterDelete);
    }

    return (
        <div>
            <InputBox getInputText={setSearchTextHandler} getNumOfMovInPage={setNumOfMovInPageHandler} setCpage={setCpage} />
            <MoviesTable movies={movies} isLoaded={isLoaded} cPage={cPage} deleteMovieFromArray={deleteMovie} searchText={sText} numberOfMovies={numberOfMoviesInPage} searchGenre={props.sOnGenre} />
            <Pagination allMovies={movies} numMoviesInPage={numberOfMoviesInPage} cPage={cPage} setCpage={setCpage} setGenre={props.setGenre} />
        </div>
    )
}

export default Movies;