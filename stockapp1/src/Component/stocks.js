import React,{useState,useEffect} from 'react';
import generateStocks from '../data/generateStocks';
import DisplayComponent from './displayComponent'
import './stocks.css'


function StockApp(){
    const[stocks,setStocks] = useState()
    const[delay,setSDelay] = useState(2000)

    useEffect(() => {
        generateStocks().then((stocks) => setStocks(stocks))
    },[])

    useEffect(() => {
        const intervalId = setInterval(() => {
            generateStocks().then((stocks) => setStocks(stocks))
        },delay)
        return() => {
            clearInterval(intervalId)
        }
    },[delay])

    const resetDelay = (e) => {
        setSDelay(e.target.value)
    }

    return(
        <div className='container'>
            <button value={500} onClick={resetDelay}>Half Second</button>
            <button value={1000} onClick={resetDelay}>1 Second</button>
            <button value={2000} onClick={resetDelay}>2 Second</button>
            <button value={5000} onClick={resetDelay}>5 Second</button>
            <DisplayComponent data={stocks}/>
            
        </div>
    )

}

export default StockApp;