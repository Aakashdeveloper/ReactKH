import logo from './logo.svg';
import './App.css';
import OriginalComponent from './component/originalComponent';
import withUpperCase from './component/withUpperCase';

function App() {

  const NewComponet = withUpperCase(OriginalComponent)

  return (
    <div className="App">
      <OriginalComponent text="Original Component Text"/>
      <NewComponet text="New Componet Text"/>
    </div>
  );
}

export default App;
