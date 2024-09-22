import React, { useState } from 'react'
import NavContext from './NavContext'

const NavContextProvider = ({children}) => {
  const [open,setOpen]=useState(false)
  return (
    <NavContext.Provider value={{open,setOpen}}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider
