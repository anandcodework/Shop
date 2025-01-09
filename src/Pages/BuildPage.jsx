import React from 'react'
import Navbar from '../componets/Navbar/WithOutSearch'
import BuildSetup from '../componets/BuildSetup/BuildSetup'
import Menu from './../componets/Navbar/Menu';
import PSC from '../componets/BuildSetup/PSC'

function BuildPage() {
  return (
    <>
    <Navbar/>
    <Menu />
    <BuildSetup className='container mt-10' />
    <PSC></PSC>
    </>
  )
}

export default BuildPage