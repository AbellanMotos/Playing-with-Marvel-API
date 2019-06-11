import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
    return <div>
        <h1>Marvel's API</h1>
        <NavLink to="/">Heroes</NavLink>
        <NavLink to="/comics">Cómics</NavLink>
        </div>
        
}

export default Header