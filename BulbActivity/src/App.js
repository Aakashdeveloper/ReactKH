import {Component} from 'react';
import BulbState from './BulbState';

class App extends Component {
  render(){
    return(
      <>
       <h1 style={{textAlign:'center'}}>Bulb Activity</h1>
       <BulbState/>
      </>
      
    )
  }
 
}

export default App;
