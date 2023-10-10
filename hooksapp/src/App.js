import './App.css';
import {useState} from 'react'
import HooksComponent from './component/HooksComponent';
import Context2 from './component/Context2';
import ExpensiveCalculation from './component/memoHook';
import useLocalStorage from './component/useCutsome';

function App() {

  const [count,setCount] = useState(1)
  const [counter,setCounter] = useLocalStorage('counter',0)

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter+1)}>Counter</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <hr/>
      {/* <button onClick={()=>{setCount(1)}}>1</button>
      <button onClick={()=>{setCount(2)}}>2</button>
      <button onClick={()=>{setCount(3)}}>3</button>

      <ExpensiveCalculation number={count}/> */}
      <Context2/>
        
      <HooksComponent/>
    </div>
  );
}

export default App;
