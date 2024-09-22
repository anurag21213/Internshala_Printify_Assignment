import React, { useContext } from 'react'
import MobileNav from './MobileNav'
import Navbar from './Navbar'
import NavContext from '../contextAPI/NavContext/NavContext'

const Nav = () => {

    const {open}=useContext(NavContext)

  return (
    <>
        {
            open&&<MobileNav/>
        }
        

        <Navbar/>
    </>
  )
}

export default Nav
