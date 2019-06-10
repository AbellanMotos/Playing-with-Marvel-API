import React, {Component} from 'react';
import Personaje from './personaje';
import axios from 'axios';
import {API_URL} from '../controller/config'

class Personajes extends Component{
    constructor(props){
        super(props);
        this.state = {
            personajes: []
        }

       axios.get(API_URL).then((resp) => {
           console.log(resp);
           let pjs = resp.data.data.results
            this.setState({
               personajes: pjs
           })
       })
       
    }

    render(){
        return <div>
            <h1>Superheroes de ayer y hoy</h1>
            {this.state.personajes.map((pj, i) => <Personaje {...pj} key={i}/>)}
        </div>
    }
}

export default Personajes