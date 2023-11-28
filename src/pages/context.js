import { createContext } from "react";
import { useState } from "react";

export const MainContext = createContext()

export const ContextProvider = ({ children }) => {

  const [ menuOpen, setMenuOpen ] = useState(false)
  
  const openMenu = () =>{
    setMenuOpen(true)
  }

  const closeMenu = (hoho) =>{
    if(menuOpen == true){
        console.log(hoho.target.className)
      if(!hoho.target.className.includes('gay')){
        setMenuOpen(false)
      }
   }
  }

 
    return (
        <MainContext.Provider value={{menuOpen, closeMenu, openMenu, setMenuOpen}}>
            {children}
        </MainContext.Provider>
    )
}
