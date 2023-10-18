import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions';
import DisplayComponent from '../component/DisplayComponent';

class Home extends Component{
  //call action
  componentDidMount(){
      this.props.dispatch(movieList())
  }

  render(){
      return(
          <div>
              
              <DisplayComponent dataList={this.props.myData}/>
          </div>
      )
  }
}

//here we will get data from store
function mapStateToProps(state){
    console.log(state)
    return{
        myData:state.films
    }
}

export default connect(mapStateToProps)(Home)