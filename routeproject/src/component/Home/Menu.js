import React,{useState,useEffect} from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

const base_url = process.env.REACT_APP_API_URL;

const Menu = () => {
    //console.log(">>>",base_url)

    const [mealType,setMealType] = useState()

    const fetchData  = async() => {
        let data = await fetch(`${base_url}/quicksearch`,{method:'GET'});
        let response = await data.json()
        setMealType(response)
    }

    useEffect(() => {
        fetchData()
    },[])

    const listMeal = () => {
        if(mealType){
            return mealType.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div className='tileContainer'>
                            <div className='tileComponent1'>
                                <img src={item.meal_image} alt="lunch"/>
                            </div>
                            <div className='tileComponent2'>
                                <div className='componentHeading1'>
                                    {item.mealtype}
                                </div>
                                <div className='componentHeading2'>
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className='quickSearch'>
            <span id="QuickSearchHeading">
                Quick Search
            </span>
            <span id="QuickSubHeading">
                Find Restaurants By MealType
            </span>
            <div>
                {listMeal()}
            </div>
        </div>
    )
}

export default Menu;

// useEffect(() => {
//     fetch(`${base_url}/quicksearch`,{method:'GET'})
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//     })
// },[])