import React from 'react';

const DisplayComponent = (props) => {

    const renderStocks = ({data}) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className='stock'>
                        <div className='company'>{item.company}</div>
                        <div>{item.price}</div>
                        <div className={item.variation <0?'var-down':'var-up'}>{item.variation}</div>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <center>
                <h2>Stock List</h2>
                {renderStocks(props)}
            </center>
        </div>
    )
}

export default DisplayComponent