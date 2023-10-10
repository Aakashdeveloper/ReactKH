import './stocks.css'

function Stocks({company,price,variation}){
    return(
        <div className='stock'>
            <div className='company'>{company}</div>
            <div>{price}</div>
            <div className={variation <0?'var-down':'var-up'}>{variation}</div>
        </div>
    )
}

export default Stocks;