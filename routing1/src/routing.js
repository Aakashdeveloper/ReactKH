import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import AboutDetails from './component/AboutDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/details/:topic" component={AboutDetails}/>
                <Route path="/home" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing;