import React,{Component} from 'react';

//Generic Component that provides data via render props
class DataProvider extends Component{
    constructor(){
        super()

        this.state={
            data:'Render Props passing data example'
        }
    
    }
    
    render(){
        //call the render props function and pass data as an argument
        return (this.props.render(this.state.data),this.props.tesxt(this.state.data))
    }

}


export default DataProvider