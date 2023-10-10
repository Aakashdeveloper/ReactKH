import React,{Component} from 'react';
const MyContext = React.createContext();

class MyProvider extends Component{
    state={
        city:'London'
    }

    render(){
        return(
            <MyContext.Provider value={{state:this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

class City extends Component{
    render(){
        return(
            <MyContext.Consumer>
                {(data) => {
                    return(
                        <p>Hi To {data.state.city}</p>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}

class City1 extends Component{
    render(){
        return(
            <MyContext.Consumer>
                {(data1) => {
                    return(
                        <p>Hi To {data1.state.city}</p>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}


const Country = (props) => {
    return(
        <div>
            <City/>
            <City1/>
        </div>
    )
}

class ContextComponent extends Component{
    render(){
        return(
            <MyProvider>
                <Country/>
            </MyProvider>
        )
    }
}

export default ContextComponent