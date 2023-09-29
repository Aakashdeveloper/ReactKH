import React,{Component} from 'react';

class Search extends Component{

    handleChange = (event) => {
        this.props.userText(event.target.value)
    }

    render(){
        return(
            <>
                <input onChange={this.handleChange}/>
            </>
        )
    }
}

export default Search;