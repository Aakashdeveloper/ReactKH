import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Menu from './Home/Menu';
import Listing from './Listing/Listing';
import Details from './Details/Details';
import Main from './App';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Menu/>}/>
                    <Route path="listing/:mealId" element={<Listing/>}/>
                    <Route path="details" element={<Details/>}/>
                </Route>
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
    )
}

export default Routing;