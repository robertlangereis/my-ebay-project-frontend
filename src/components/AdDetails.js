import React from 'react'
import EditAdFormContainer from './EditAdFormContainer';
import { Link } from 'react-router-dom'

export default (props) => {
    // console.log(props)
    const { ad, onDelete } = props  
    if (ad){
    return (<div>
            <h1>{ad.title}</h1>
            <p>{ad.description}</p>
            <i>{ad.price}</i>
            <button onClick={onDelete}>Delete Advertisement</button>
            <br></br>
            <EditAdFormContainer/>
            <button type="button">
                <Link style={{display: 'block', height: '100%'}} to={`/`}>HOME</Link>
            </button>
            </div>)    }
    else return 'Loading advertisements...'
}

