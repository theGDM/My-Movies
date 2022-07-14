import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav class="sticky top-0 bg-black border-gray-200 px-2 sm:px-4 text-white py-2.5 dark:bg-gray-800 mb-3">
                <div class="flex items-center mx-auto">
                    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul class="mt-4 uppercase md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium w-200 flex justify-around">
                            <div class="w-72 flex justify-between">
                                <li>
                                    <a href="#" class="block py-3 font-bold pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-300 md:p-0 dark:text-white text-2xl" aria-current="page">
                                        <Link to="/home">Movies</Link>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block py-3 font-bold pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl" aria-current="page">
                                        <Link to="/new">Get Details</Link>
                                    </a>
                                </li>
                            </div>
                            <div class="w-48 flex justify-between">
                                <li>
                                    <a href="#" class="block py-3 font-bold pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl">
                                        <Link to="/login">Login</Link>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block py-3 font-bold pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl">
                                        <Link to="/signup">Signup</Link>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;