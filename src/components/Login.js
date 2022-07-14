import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-between items-center bg-pink-200 w-2/5 h-4/5 rounded mx-auto px-3'>
                <div className='flex align-center justify-center border-b-2 border-pink-400 w-full'>
                    <h1 className='font-bold uppercase text-3xl text-gray-700 py-2'>LOGIN</h1>
                </div>
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="grid-username">
                                Username
                            </label>
                            <input key={1} class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-blue-500 focus:bg-violet-700 focus:border-gray-500 border-2 border-blue-700 " id="grid-username" type="username" placeholder="xyz@1234"></input>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="grid-password">
                                Password
                            </label>
                            <input key={2} class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-blue-500 focus:bg-violet-700 focus:border-gray-500 border-2 border-blue-700 " id="grid-password" type="password" placeholder="******************"></input>
                        </div>
                    </div>
                </form>
                <div className='mb-2'>
                    <button className='bg-blue-600 py-2 px-10 rounded font-semibold text-white border-2 border-blue-800'>
                        LogIn
                    </button>
                    <button className='bg-yellow-400 py-2 px-10 rounded font-semibold border-2 border-yellow-500 ml-6'>
                        <Link to="/home">Cancel</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login