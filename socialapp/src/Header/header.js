import React,{Component} from 'react';
import './header.css'

class Header extends Component{
    render(){
        return(
            <header>
                <div className='image'>
                    <img src="images/instalogo.png" alt="logo"/>
                </div>
                <div className='nav'>
                    <a href=""> <i className="fa-solid fa-house"></i>  Home</a>
                    <a href=""><i className="fa-regular fa-user"></i>  Profile</a>
                    <a href=""><i className="fa-solid fa-heart"></i>  Notification</a>
                    <a href=""><i className="fa-solid fa-plus"></i>  Create</a>
                    <button className='logout'>Logout</button>
                </div>
            </header>
        )
    }
}

export default Header;