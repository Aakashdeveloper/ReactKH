import React,{Component} from 'react';

function Hoc(DataComponent,data){
    return class extends Component{
        constructor(props){
            super(props)

            this.state={
                data:data
            }
        }

        render(){
            return(
                <DataComponent data={this.state.data} {...this.props}/>
            )
        }
        
    }
}

export default Hoc