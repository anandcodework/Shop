import React from 'react'
import Favorites from '../componets/Favorites/Favorites'
import Footer from '../componets/Footer/Footer'
import Navbar from '../componets/Navbar/WithOutSearch'
import Menu from '../componets/Navbar/Menu'


function FavoritePage() {
  return (
    <>
    <Navbar />
    <Menu />
    <Favorites/>
    <Footer />
    </>
  )
}

export default FavoritePage