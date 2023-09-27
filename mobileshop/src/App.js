import './App.css';
import {useState} from 'react'
import JSON from './mobiledata.json';
import MobileComponent from './MobileComponent';

function App() {

  const [data] = useState(JSON);
  const [count,setCount] = useState(0)

  const updateState=() => {
    setCount(count+1)
  }
  
  return (
     <div className="App">
      <div className='cart'>Cart {count}</div>
      <MobileComponent updateCount={()=>{updateState()}} mobiles={data}/>
    </div>
  );
}

export default App;