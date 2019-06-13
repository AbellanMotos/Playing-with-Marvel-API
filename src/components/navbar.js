import React from 'react'
import {NavLink} from 'react-router-dom'
import style from '../styles/navstyle'

const Header = () => {
    return <header style={style.cabecera}>
        <div>
        <NavLink activeClassName="is-active"to="/" style={style.btnsty}>Héroes</NavLink>
        </div>
        <h1>Marvel's API</h1>
        <div>
        <NavLink activeClassName="is-active"to="/comics" style={style.btnsty} exact>Cómics</NavLink>
        </div>
        </header>
        
}

export default Header