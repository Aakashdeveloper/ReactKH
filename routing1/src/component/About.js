import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <>
         <h1>About</h1>
         <Link to="/details/JavaScript?page=1">JavaScript Details</Link>
         <Link to="/details/React?page=2">React Details</Link>
         <Link to="/details/Node?page=3">Node Details</Link>
        </>
       
    )
}

export default About;