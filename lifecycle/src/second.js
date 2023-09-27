import React,{Component} from 'react';

class Child extends Component{
    constructor(props){
        super(props)
        console.log("inside child constructor")
        this.state={
            name:"John",
            counter:0
        }
    }

  

    static getDerivedStateFromProps(props,state){
        console.log(">>>>getDerivedStateFormProps")

        if(props.name !== state.name){
            return {
                name:props.name
            }
        }

        return null
    }

    updateState = () => {
        let randomNumber = Math.floor((Math.random()*(10-5))+5)
        this.setState({counter:randomNumber})
    }

    componentDidUpdate(prevProps, prevState){
        console.log("inside componentDidUpdate prevProps>",prevProps)
        console.log("inside componentDidUpdate prevState>>",prevState)
        if(this.state.counter != prevState.counter){
            console.log(">>>> New Number")
        }else{
            console.log(">>>> Old Number")
        }
    }

    render(){
        return(
            <>
                <p>Child Component {this.state.name}</p>
                <p>{this.state.counter}</p>
                <button onClick={this.updateState}>Click</button>
            </>
        )
    }



    componentDidMount(){
        console.log(">>>>componentDidMount",this.props)
        this.setState({name:this.props.city})
    }
   

}

export default Child;