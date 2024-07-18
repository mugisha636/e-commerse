import React from 'react'
import DarkButton from "../../assets/website/dark-mode.png"
import LightButton from "../../assets/website/night-mode.png"


const DarkMode = () => {
const [theme,setTheme] = React.useState(localStorage.getItem
  ("theme")? localStorage.getItem("theme"):"light");

  const element=document.documentElement
  //acess to html element//

  //set theme to local storage and html element
  
  React.useEffect(()=>{
    localStorage.setItem("theme",theme);
    if(theme==="dark"){
      element.classList.add("dark");
      element.classList.add("dark");
  
          } else{
            element.classList.remove("light")

            element.classList.remove("dark")
          }
  })

  return (
    <div className='relative'>
      <img 
      onClick={()=>setTheme(theme==="dark"?"light":"dark")}
      src={LightButton} alt=''
    className={`w-12 cursor-pointer absolute right-0 z-10  ${theme==="dark"? "opacity-0": "opacity-100"}
    transition-all duration-300 `}
    />
    <img 
    onClick={()=>setTheme(theme==="dark"?"light":"dark")}
    src={DarkButton} alt=''
    className={`w-12 cursor-pointer ${theme==="dark"? "opacity-0": "opacity-100"}`}
    />
    </div>
  )
}

export default DarkMode