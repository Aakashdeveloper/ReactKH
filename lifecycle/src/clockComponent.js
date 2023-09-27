import React,{Component} from 'react';

class ClockComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            date:new Date()
        }
    }


    render(){
        console.log(this.state.date.toLocaleTimeString())
        return(
            <div>
                Time Clock
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
            this.setState({
                data:new Date().toLocaleTimeString()
            })
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    
}

export default ClockComponent