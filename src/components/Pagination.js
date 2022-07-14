import React from 'react';

function Pagination(props) {
    //no of movies : N
    //no of movies per page : n 
    let N = props.allMovies.length;
    let n = props.numMoviesInPage;
    let cp = props.cPage;

    let numberOfPages;
    if (n == 0) { //edge case to prevent from infinity
        numberOfPages = 0;
    } else {
        numberOfPages = Math.ceil(N / n);
    }

    // console.log(N + " " + n + " " + numberOfPages);

    let paginationButtons = [];
    for (let i = 1; i <= numberOfPages; ++i) {
        paginationButtons.push(i);
    }

    const setGenreAndCurrentPage = (pn) => {
        props.setCpage(pn);
        props.setGenre("All Genres"); //imporatnt too, because as we change the page via pagination we need 
        //to again set the genre as All Genre, otherwise we get bad experience
    }

    return (
        <div className="pagination">
            {paginationButtons.map(pn => {
                return (
                    <button key={pn} className={pn === cp ? "bg-blue-600 hover:bg-blue-500 focus:outline-none ring ring-violet-300 py-2 px-3 font-semibold border-2 border-blue-700 rounded mr-1"
                        : "hover:bg-blue-300 focus:outline-none py-2 px-3 font-semibold border-2 border-blue-700 rounded mr-1"}
                        onClick={() => setGenreAndCurrentPage(pn)}>{pn}</button>
                )
            })}
        </div>
    )
}

export default Pagination;