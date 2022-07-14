import React from 'react'
import Navbar from './Navbar';

function PageNotFound() {
    return (
        <>
            <Navbar />
            <div className='text-3xl py-2 px-2'>Error : 404</div>
        </>
    )
}

export default PageNotFound;