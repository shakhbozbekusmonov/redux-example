import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Counter from "../components/Counter";
import Employee from "../components/Employee";

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<h1>Home</h1>} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
                <Route path='/' element={<Navigate to='/home' />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Root;
