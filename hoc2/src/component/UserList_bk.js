import React,{Component} from 'react';
import TableRow from './TableRow'

class UserList extends Component{
    constructor(props){
        super(props)

        this.state={
            stocks:[
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
                            <td>User Id</td>
                            <td>User Name</td>
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

export default UserList;