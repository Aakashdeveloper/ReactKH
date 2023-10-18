import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './Listing.css';
import ListingDisplay from './ListingDisplay'

const base_url = process.env.REACT_APP_API_URL;

const Listing = () => {
    let params = useParams();
    const [rest,setRest] = useState([]);

    useEffect(() => {
        fetch(`${base_url}/filter/${params.mealId}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            setRest(data)
        })
    })


    return(
        <>
            <ListingDisplay listData={rest}/>
        </>
    )
}

export default Listing;