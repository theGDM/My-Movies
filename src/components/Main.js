import React from 'react';
import Genre from './Genre';
import Movies from './Movies';

function Main() {
    let [sOnGenre, setGenre] = React.useState("");

    const searchOnGenre = (nGenre) => {
        console.log(nGenre);
        setGenre(nGenre);
    }

    return (
        <div className="flex px-3">
            <Genre getGenre={searchOnGenre} />
            <Movies sOnGenre={sOnGenre} setGenre={setGenre} />
        </div>
    )
}

export default Main;