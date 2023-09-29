import React,{Component} from 'react';

class ThirdComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            count: 0
        }
    }

    //
    shouldComponentUpdate(nextProps,nextState){
        return nextState.count % 2 === 0;
    }

    handleClick = () => {
        this.setState({count: this.state.count+1})
    }

    render(){
        console.log("inside render")
        return(
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.handleClick}>Counter</button>
            </div>
        )
    }
}

export default ThirdComponent