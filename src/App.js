import React from 'react';
import Home from './components/Home';
import New from './components/New';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import Signup from './components/Signup';

import { Route, Routes, Navigate } from 'react-router-dom';
//Navigate for redirecting
function App() {
    return (
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Navigate to="/home" replace />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes >
    )
}

export default App;