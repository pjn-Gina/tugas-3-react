import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import NavFavorite from '../../../components/Navbar/NavFavorite'

function Music() {
  return (
    <>
    <Navbar/>
    <NavFavorite/>
    <h1>Favorite Music</h1>
    <li>Tulus</li>
    <li>One Direction</li>
    <li>Taylor Swift</li>
    </>
  )
}

export default Music