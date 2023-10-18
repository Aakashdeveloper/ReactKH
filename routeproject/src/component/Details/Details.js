import React,{useState,useEffect} from 'react';
import './Details.css';
import {useSearchParams} from 'react-router-dom';

const base_url = process.env.REACT_APP_API_URL;

const Details = () => {
    const [details,setDetails] = useState([])
    let [searchParams] = useSearchParams();
    //console.log(searchParams.getAll('restId'))

    useEffect(() => {
        fetch(`${base_url}/details/${searchParams.getAll('restId')}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setDetails(data[0])
        })
    })

    return(
        <div className='main'>
            <div className='tileImage'>
                <div className='imageClass'>
                    <img src={details.restaurant_thumb} alt={details.restaurant_name}/>
                </div>
            </div>
            <div className='tileContent'>
                <div className='content'>
                    <h1>{details.restaurant_name}</h1>
                    <span id="cfeedback">2342 Customers Rating is {details.rating_text}</span>
                    <h3>Old Price <del>Rs.1000</del></h3>
                    <h3>New Price {details.cost}</h3>
                    <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                                    <div>
                                        <div className="icons">
                                            <img src="https://i.ibb.co/wJvrhYg/veg.png" alt=""/>
                                        </div>
                                        <div className="icons">
                                            <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                                        </div>
                                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;