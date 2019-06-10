import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {API_URL, API_URL_KEY} from '../controller/configpj'


class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            personaje: null
        }
        let personajeId = props.match.params.id

        axios.get(API_URL + personajeId + API_URL_KEY).then((resp) => {
            let pj = resp.data.data.results
            this.setState({
                personaje: pj[0]
            })
           console.log(pj);
        })
    } 

    render(){
        if(this.state.personaje){
        return <div>
                <Link to="/">Volver a página principal</Link>
                <h1>{this.state.personaje.name}</h1>
                {<img src={this.state.personaje.thumbnail.path + '.' + this.state.personaje.thumbnail.extension} />}
                <h2>Apariciones en cómics</h2>
                </div>
    }else{
        return <div>
            <h2>Buscando heroe...</h2>
        </div>
    }}


}

export default Detail
