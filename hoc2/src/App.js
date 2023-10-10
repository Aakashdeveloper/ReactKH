import logo from './logo.svg';
import './App.css';
import StockList from './component/StockList';
import UserList from './component/UserList';
import Hoc from './component/withTable';

const stocks = [
  {
    id:1,
    name:'TCS'
  },
  {
      id:2,
      name:'SBI'
  },
  {
      id:3,
      name:'Infosys'
  }
]

const users = [
  {
    id:1,
    name:'Karan'
  },
  {
      id:2,
      name:'Nikita'
  },
  {
      id:3,
      name:'Rohit'
  }
]

const StockComponent = Hoc(StockList,stocks);
const UserComponent = Hoc(UserList,users)


function App() {
  return (
    <div className="App">
      <StockComponent/>
      <UserComponent/>
    </div>
  );
}

export default App;



const arr = [{name:'bla',age:29},{name:'bla1',age:31},{name:'nls',age:29}]