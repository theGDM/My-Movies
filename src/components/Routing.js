import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
    return (
        <div>Home</div>
    )
}

function Login() {
    return (
        <div>Login</div>
    )
}

function PageNotFound() {
    return (
        <div>PageNotFound</div>
    )
}

function Routing() {
    return (
        <>
            <div>Routing Examples</div>
            <Routes>
                <Route path="/home" element={<Home />} exact />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes >
        </>
    )
}

export default Routing;