import React, { useEffect } from 'react'

function MoviesTable(props) {
    // console.log(movies);
    // console.log("SearchText at MoviesTable :" + props.searchText);
    // console.log("Number of movies : " + props.numberOfMovies);

    let movies = props.movies; //getting it from movies parent component
    let isLoaded = props.isLoaded;
    let cp = props.cPage;
    let n = parseInt(props.numberOfMovies);
    // console.log(n);
    let sid = (cp - 1) * n;
    let eid = sid + n;
    // console.log(sid);
    // console.log(eid);

    const deleteMovie = (rid) => {
        props.deleteMovieFromArray(rid);
    }

    //inititally set it same as movies
    let filteredMovies = movies;

    //no of movies per page (1st set no of movies on a page based on sid and eid)
    if (props.numberOfMovies >= 0) {
        filteredMovies = filteredMovies.slice(sid, eid);
    }

    //searching
    if (props.searchText !== "") { //after setting filterMovies based on sid and eid, perform everything on this array
        filteredMovies = filteredMovies.filter(movie => {
            //make movie title lowercase and search text too
            return movie.title.toLowerCase().includes(props.searchText.toLowerCase());
        })
    }

    //sorting on the basis of genre
    // console.log(filteredMovies);
    if (props.searchGenre != "" && props.searchGenre != "All Genres") {
        console.log("inside");
        filteredMovies = filteredMovies.filter(movie => {
            return movie.genre.name === props.searchGenre;
        })
    }
    // console.log(filteredMovies);

    // filteredMovies = filteredMovies.slice(0, props.numberOfMovies);

    let tableContent = (
        <table className="table-auto mb-3 border-2 border-blue-500">
            <thead>
                <tr className="border uppercase border-b-4 border-t-4 border-blue-500">
                    <th className="px-4 py-3 text-center">No.</th>
                    <th className="px-4 py-3 text-center">Title</th>
                    <th className="px-4 py-3 text-center">Genre</th>
                    <th className="px-4 py-3 text-center">Stock</th>
                    <th className="px-4 py-3 text-center">IMDB Rating</th>
                </tr>
            </thead>
            <tbody>
                {filteredMovies.map((movie, idx) => {
                    return (
                        <tr className="border-b-2 border-blue-300" key={movie._id}>
                            <td className="px-4 py-2 text-center">{idx + sid + 1}</td>
                            <td className="px-4 py-2 text-center">{movie.title}</td>
                            <td className="px-4 py-2 text-center">{movie.genre.name}</td>
                            <td className="px-4 py-2 text-center">{movie.numberInStock}</td>
                            <td className="px-4 py-2 text-center">{movie.dailyRentalRate}</td>
                            <td className="px-4 py-2 text-center"><button className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 border border-red-700 rounded"
                                onClick={() => deleteMovie(movie._id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

    return (
        <div className="tableContent">{isLoaded === false ? <div className="font-bold">Loading...</div> : <div>{tableContent}</div>}</div>
    )
}

export default MoviesTable;
