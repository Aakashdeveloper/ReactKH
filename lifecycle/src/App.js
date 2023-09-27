import './App.css';
import React,{Component} from 'react';
import Child from './second';
import Third from './third';
import './clock.css';
import ClockComponent from './clockComponent';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <h2>Hello Timer!!</h2>
        <ClockComponent/>
        {/* <Third/> */}
        {/* <Child name="Test"/> */}
      </div>
    );
  }
  
}

export default App;
