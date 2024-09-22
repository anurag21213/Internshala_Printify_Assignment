import React, { useState } from 'react'
import NavContext from './navContext'

const NavContextProvider = ({children}) => {
  const [open,setOpen]=useState(false)
  return (
    <NavContext.Provider value={{open,setOpen}}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider
