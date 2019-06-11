import {API_URL_COMPLETE} from '../controller/configcomics'
import React, {Component} from 'react'
import Comic from './comic'
import axios from 'axios'

class Comics extends Component{
    constructor(props){
        super(props)
        this.state = {
            comics: []
        }

axios.get(API_URL_COMPLETE).then((resp) => {
    let comiks = resp.data.data.results
        this.setState({
        comics: comiks
    })
})

    }

    render(){
        return <div>
            <h1>Selección de cómics</h1>
            {this.state.comics.map((comic, i) => <Comic {...comic} key={i} />)}
        </div>
    }
}

export default Comics