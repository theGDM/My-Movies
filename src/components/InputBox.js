import React from 'react';
import { Link } from 'react-router-dom';

function InputBox(props) {
    let [searchText, setSearchText] = React.useState("");
    let [numberOfItems, setNumberOfItems] = React.useState(4);

    const handleTextChange = (e) => {
        //local input change -ui
        setSearchText(e.target.value);
        //send to parent i.e movies
        props.getInputText(e.target.value);
    }

    const handleNumberChange = (e) => {
        setNumberOfItems(e.target.value);
        props.getNumOfMovInPage(e.target.value);
    }

    return (
        <div className='mb-3'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 border-2 border-blue-700 rounded">
                <Link to='/new'>New</Link>
            </button>
            <input placeHolder="Search Movies" className="focus:outline-none focus:ring focus:ring-violet-300 border rounded py-1 px-3 mx-2" type='text' value={searchText} onChange={handleTextChange}></input>
            <input className="focus:outline-none focus:ring focus:ring-violet-300 border rounded py-1 px-3 mx-2 w-20" type='number' min="0" max="9" value={numberOfItems} onChange={handleNumberChange}></input>
        </div>
    )
}

export default InputBox;