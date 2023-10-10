import React from "react";
import generateStocks from "../data/generateStocks";

function withStockRates(Component){
    return class extends React.Component{
        constructor(props){
            super(props)

            this.state={
                stocks:[]
            }
        }

        componentDidMount(){
            generateStocks()
                    .then((data) => {
                        this.setState({stocks:data})
                    })

            this.interval = setInterval(() => {
                generateStocks()
                    .then((data) => {
                        this.setState({stocks:data})
                    })
            },2000)
        }

        componentWillUnmount(){
            if(this.interval){
                clearInterval(this.interval)
            }
        }

        render(){
            return <Component {...this.props} stockRates={this.state.stocks}/>
        }

    }
}

export default withStockRates