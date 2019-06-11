import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Personajes from './components/personajes';
import Personaje from './components/personaje';
import Detallepj from './components/detallepj';
import Comics from './components/comics';
import DetalleComic from './components/detailcomic';

const router = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Personajes} exact />
            <Route path="/pj" component={Personaje} exact />
            <Route path="/pj/:id" component={Detallepj} exact />
            <Route path="/comics" component={Comics} exact />
            <Route path="/comic/:id" component={DetalleComic} />
        </Switch>
    </BrowserRouter>
)




ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
