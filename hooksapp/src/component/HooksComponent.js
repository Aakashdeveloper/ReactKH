import React,{useState,useEffect} from 'react';

const url = "http://3.17.216.66:4000/location";

function HooksComponent(){
    const [title] = useState('Hooks Component');
    const [count,setCount] = useState(0);
    const [count1,updateCount] = useState(0);
    const [location,setLocation] = useState()

    const updateCounter = () => {
        updateCount(count1+1)
    }

    useEffect(()=>{
        console.log("hiii");
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setLocation(data)
        })
    },[count])


    return(
        <>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Counter</button>
            <h2>{count1}</h2>
            <button onClick={updateCounter}>Counter1</button>
        </>
    )
}

export default HooksComponent;