import React,{useState,useMemo} from 'react';

const ExpensiveCalculation = ({number}) => {

    const calculateResult =() => {
        console.log(`Calculating Result....`)
        return number *2;
    }

    const result = useMemo(() => calculateResult(),[number])

    return (
        <div>
            <p>Number:{number}</p>
            <p>Result:{result}</p>
        </div>
    )
}

export default ExpensiveCalculation;