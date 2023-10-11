import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import App from './App.js';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
}


export default Routing;