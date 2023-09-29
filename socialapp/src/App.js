import './App.css';
import React,{Component} from 'react';
import Header from './Header/header';
import Post from './Posts/post'

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='main'>
        <Header/>
        <Post/>
      </div>
    );
  }
  
}

export default App;
