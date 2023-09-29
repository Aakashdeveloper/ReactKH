import React,{Component} from 'react';
import './post.css';
import Search from './search';
import Display from './display';
import axios from 'axios';

const baseUrl = "https://pixabay.com/api/?key=37174385-5b3a05820e1a9a74a0ee55daa&image_type=photo&pretty=true&per_page=40"

class Post extends Component{
    constructor(props){
        super(props)

        this.state={
            posts:'',
            filterData:''
        }
    }

    handleCategory = (event) => {
        let catType = event.target.value
        fetch(`${baseUrl}&q=${catType}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            console.log(data)
            this.setState({posts:data.hits,filterData:data.hits})
        })
    }

    filterData = (keyword) => {
        let output = this.state.posts.filter((obj) => {
            return obj.tags.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filterData:output})

    }

    render(){
        return(
           <div className='postDiv'>
               <button onClick={this.handleCategory} value="space">Space</button> &nbsp;
               <button onClick={this.handleCategory} value="nature">Nature</button> &nbsp;
               <button onClick={this.handleCategory} value="food">Food</button> &nbsp;
               <button onClick={this.handleCategory} value="moon">Moon</button> &nbsp;
               <hr/>
               <Search userText={(data) => {this.filterData(data)}}/>
               <Display postData={this.state.filterData}/>
           </div>
        )
    }

    async componentDidMount(){
       let res = await axios.get(baseUrl);
       this.setState({posts:res.data.hits,filterData:res.data.hits})
    }
}

export default Post;


// fetch(url,{method:'POST'})
//         .then((res) =>  res.json())
//         .then((data) => {
//             console.log(data.hits)
//         })

// axios.get(url)
// .then((res) =>  console.log(res.data.hits))