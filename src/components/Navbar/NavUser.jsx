import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

function NavUser() {
  return (
    <>
    <form style={{ textAlign: "center" }}>
      <button>
        <Link to="/user/settings">User Settings</Link>
      </button>
      <button>
        <Link to="/user/profile">User Profile</Link>
      </button>
    </form>
  </>

  )
}

export default NavUser