import React from 'react'
import Navbar from '../componets/Navbar/WithOutSearch'
import Login from './../componets/Login/Login';
import Menu from '../componets/Navbar/Menu';

function LoginPage() {
  return (
    <>
    <Navbar/>
    <Menu />
    <Login/>
    </>
  )
}

export default LoginPage