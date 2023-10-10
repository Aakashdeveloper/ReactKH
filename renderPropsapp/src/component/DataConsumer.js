import React,{Component} from 'react';
import DataProvider from './DataProvider';

class DataConsumer extends Component{


    render(){
        return(
            <>
                <h1>Render Props</h1>
                <DataProvider 
                render={(data)=>(
                    <div>
                        <p> Data Form Provider</p>
                        <p>{data}</p>
                    </div>
                )}

                text={(data) => (
                    <div>Hiii</div>
                )}
                
                />
            </>
            
        )
    }
}

export default DataConsumer;