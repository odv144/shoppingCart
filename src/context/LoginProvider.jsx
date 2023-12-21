import React, { useState } from 'react'
import {LoginContext} from './LoginContext'
export const LoginProvider = ({children}) => {
    const initValues={
        user: 'Omar Dario',
        email:'omar.virili@gmail.com',
        pass:'1234',
        validado:false
    }
    const [login,setLogin]=useState(initValues)

  return (
    <LoginContext.Provider value={{login,setLogin}}>
        {children}
    </LoginContext.Provider>
  )
}
