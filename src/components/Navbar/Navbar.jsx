import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
            <h2 class="heading">My<span>Website</span></h2>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/user">User</Link> </li>
                <li> <Link to="/gallery">Gallery</Link> </li>
                <li> <Link to="/favorite">Favorite</Link> </li>
                                  
            </ul>
        </nav>
    </>
  )
}

export default Navbar;