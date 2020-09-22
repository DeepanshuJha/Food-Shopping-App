import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../logo.svg'
import classes from './Topbar.module.css'

function Topbar(){
    return (
        <div className={classes.navbarWrapper}>
            <div className={classes.navLeft}>
                <img src={logo} alt={"logo"}></img>
                <h3 className={classes.navElements}>React Restaurant</h3>
            </div>
            <div className={classes.navRight}>
                <Link to="/" className={classes.navElements}>Home</Link>
                <NavLink to="/protected" className={classes.navElements} activeStyle={{color : 'orange'}}>Menu</NavLink>            
            </div>
        </div>
    )
}

export default Topbar;