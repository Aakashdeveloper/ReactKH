import React,{Component} from 'react';
import TableRow from './TableRow'

class StockList extends Component{
    constructor(props){
        super(props)

        this.state={
            stocks:[
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
        }
    }

    tabRow(){
        if(this.state.stocks){
            return this.state.stocks.map((function(object){
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