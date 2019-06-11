import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {API_URL, API_URL_KEY} from '../controller/configpj'


class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            personaje: null,
            
        }
        let personajeId = props.match.params.id

        axios.get(API_URL + personajeId + API_URL_KEY).then((resp) => {
            let pj = resp.data.data.results
            console.log(pj);
            this.setState({
                personaje: pj[0]
            })
           
        })
    } 

    render(){
        if(this.state.personaje){
                console.log(this.state.personaje);
                console.log(this.state.personaje.comics);
        return <div>
                
                <h1>{this.state.personaje.name}</h1>
                {<img src={this.state.personaje.thumbnail.path + '.' + this.state.personaje.thumbnail.extension} />}
                <p>{this.state.personaje.description} </p>
                <h2>Apariciones en cómics</h2>
                {this.state.personaje.comics.items.map((comic) => <p>{comic.name}</p>)}
                </div>
    }else{
        return <div>
            <h2>Buscando heroe...</h2>
        </div>
    }}


}

export default Detail
