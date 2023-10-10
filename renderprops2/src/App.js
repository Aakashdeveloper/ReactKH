import logo from './logo.svg';
import './App.css';
import Input from './Input';

function App() {
  return (
    <div className="App">
       Render Props
       <Input render={(value)=> <b>{value}</b>}/>
       <Input render={(value) => <p>{value * 5}</p>}/>
       <Input render={(value) => <p>{value / 5}</p>}/>

    </div>
  );
}

export default App;
