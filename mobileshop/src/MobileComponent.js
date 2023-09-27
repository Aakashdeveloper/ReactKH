import './MobileComponent.css';

function MobileComponent(props){
    console.log(props)

    const handleClick=()=>{
        props.updateCount()
    }

    const renderMobile = ({mobiles}) => {
        if(mobiles){
            return(
                mobiles.map((item) => {
                    return(
                        <div className='card' key={item.id}>
                            <img src={item.imageUrl} className='cardImg'/>
                            <div className='contentDiv'>
                                <div className='content1'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <a href={item.readmore} target="_blank">Read More</a>
                                </div>
                                <div className='content2'>
                                    <details>
                                        <summary>Features</summary>
                                        <p>{item.features[0]}</p>
                                        <p>{item.features[1]}</p>
                                        <p>{item.features[2]}</p>
                                    </details>
                                </div>
                            </div>   
                            <button onClick={handleClick} className='cartBtn'>Add To Cart</button>
                        </div>
                    )
                })
            )
        }
       
    }

    return(
        <>  
            <img src="images/banner.png" className='banner'/>
            <div className='main'>
            {renderMobile(props)}
            </div>
            
           
        </>
       
    )
}

export default MobileComponent;