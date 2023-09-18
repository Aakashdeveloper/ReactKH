import React,{Component} from 'react';

class Bulb extends Component{
    constructor(){
        super()

        this.state={
            image:'https://i.ibb.co/SxJp6y9/bulb-on.png'
        }
    }

    onToggle=(status) => {
        let newUrl =  status == 'on' ?'https://i.ibb.co/SxJp6y9/bulb-on.png':'https://i.ibb.co/fpyWLzs/bulb-off.png'
        this.setState({image:newUrl})
    }
    // onBulb = () => {
    //     this.setState({image:'https://i.ibb.co/SxJp6y9/bulb-on.png'})
    // }

    // offBulb = () => {
    //     this.setState({image:'https://i.ibb.co/fpyWLzs/bulb-off.png'})
    // }

    render(){
        return(
            <div style={{textAlign:'center'}}>
                <img src={this.state.image} style={{height:'300px',width:'200px'}}/>
                <button onClick={this.onToggle('on')}>ON</button> &nbsp;
                <button onClick={this.onToggle('off')}>OFF</button>
            </div>
        )
    }
}

export default Bulb;