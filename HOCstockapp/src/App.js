import './App.css';
import withStockRates from './services/withStockRate';
import Stock from './Component/Stocks'

function App(props) {
  const {stockRates} = props
  return (
    <div className="App">
     {stockRates.map((stock) => <Stock key={stock.company} {...stock} />)}
    </div>
  );
}

export default withStockRates(App);


{/* <Stock company="SBI" price="34.40" variation={2}/>
<Stock company="SAL" price="12.10" variation={-4}/> */}