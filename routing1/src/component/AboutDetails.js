import React from 'react';

const AboutDetails = (props) => {
    console.log(props)
    return (
        <>
            <h1>{props.match.params.topic} Details</h1>
            <h2>Page number is {props.location.search.split('=')[1]}</h2>

        </>
        
    )
}

export default AboutDetails;