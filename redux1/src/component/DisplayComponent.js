import './Display.css'

const DisplayComponent = (props) => {

    const renderMovies = ({dataList}) => {
        if(dataList){
            return dataList.map((item) => {
                return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                )
            })
        }
    }

    return(
        <div className='container'>
            <h1>Redux</h1>
            {renderMovies(props)}
        </div>
    )
}

export default DisplayComponent;