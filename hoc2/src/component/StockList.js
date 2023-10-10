import React,{Component} from 'react';
import TableRow from './TableRow'

class StockList extends Component{

    tabRow(){
        if(this.props.data){
            return this.props.data.map((function(object){
                return <TableRow obj={object} key={object.id}/>
            }))
        }
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Stock Id</td>
                            <td>Stock Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default StockList;