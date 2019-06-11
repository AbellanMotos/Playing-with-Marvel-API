import React from 'react'
import {Link} from 'react-router-dom'

function comic(props){
        console.log(props.id);
    return <div>
        <h1>{props.series.name}</h1>
        <div><img src={props.thumbnail.path + '.' + props.thumbnail.extension} /></div>
        <Link to={"/comic/" + props.id}>Detalles del cómic </Link>

    </div>
}

export default comic