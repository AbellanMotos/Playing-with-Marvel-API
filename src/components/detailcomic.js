import React, {Component} from 'react'
import axios from 'axios'
import {API_URL_DETAIL, API_URL_KEY} from '../controller/configcomics'

class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            comic: null
        }
        let comicId = props.match.params.id
        
        axios.get(API_URL_DETAIL + comicId + API_URL_KEY).then((resp) => {
            let comic = resp.data.data.results
            this.setState({
            comic: comic[0]
            })

        })
    }

    render(){
        if(this.state.comic){
                console.log(this.state.comic);
            return <div>
                <h1>{this.state.comic.title}</h1>
                {<img src={this.state.comic.thumbnail.path + '.' + this.state.comic.thumbnail.extension} />}
                <p>{this.state.comic.description}</p>
            </div>
        }else{
            return <div>
                <h2>Comprando cómics...</h2>
            </div>
        }
    }
}

export default Detail