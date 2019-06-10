import React from 'react';
import {Link} from 'react-router-dom';

function personaje(props){
    return <div>
        <h1>{props.name}</h1>
        <div><img src={props.thumbnail.path + '.' + props.thumbnail.extension} /></div>
        <Link to={"/pj/" + props.id}>Detalles del personaje </Link>
    </div>
}

export default personaje