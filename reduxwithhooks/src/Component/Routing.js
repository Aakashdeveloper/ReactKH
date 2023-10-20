import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from '../Container/Home';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;