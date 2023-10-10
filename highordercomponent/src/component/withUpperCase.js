import React,{Component} from 'react';

// Define HOC
const withUpperCase = (WrapperComponent) => {
    return class extends Component{
        render(){
            const ModifiedProps = {
                ...this.props,
                text: this.props.text.toUpperCase()
            };

            return <WrapperComponent {...ModifiedProps}/>
        }
    }

}


export default withUpperCase