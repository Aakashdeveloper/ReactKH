import React,{Component} from 'react';

class Display extends Component{

    renderList = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className='imageDiv' key={item.id}>
                        <img src={item.userImageURL} alt="profile" className='pImage'/>
                        <span>{item.user} - {item.tags}</span>
                        
                        <div className='cImageDiv'>
                            <img src={item.largeImageURL} alt="image" className='cImage'/>
                        </div>
                        <div className='likeDiv'>
                            <p>
                                <i className="fa-solid fa-heart"></i> &nbsp;
                                <i className="fa-regular fa-comment"></i> &nbsp;
                                <i className="fa-solid fa-share"></i> &nbsp;
                            </p>
                            <p>{item.likes}</p>
                        </div>
                    
                    </div>
                )
            })
        }
    }

    render(){
        console.log(this.props)
        return(
            <>
            
            {this.renderList(this.props.postData)}
            
            </>
            
        )
    }
}

export default Display;