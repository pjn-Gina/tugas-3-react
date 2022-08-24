import React from 'react'
import {Link} from 'react-router-dom'

function NavFavorite() {
  return (
    <>
    <form style={{ textAlign: "center" }}>
      <button>
        <Link to="/favorite/music">Favorite Music</Link>
      </button>
      <button>
        <Link to="/favorite/food">Favorite Food</Link>
      </button>
    </form>
  </>
  )
}

export default NavFavorite;

