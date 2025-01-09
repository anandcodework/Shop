import React from 'react'
import Profile from '../componets/Profile/Profile'
import Navbar from './../componets/Navbar/WithOutSearch';
import Menu from './../componets/Navbar/Menu';

function ProfilePage() {
  return (
    <>
    <Navbar></Navbar>
    <Menu></Menu>
    <Profile></Profile>
    </>
  )
}

export default ProfilePage