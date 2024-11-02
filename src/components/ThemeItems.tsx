import React from 'react'

interface ThemeItem {
    img: string , 
    color : string,
    changeColor(color : string): void  
}

function ThemeItems({img , color ,changeColor }: ThemeItem) {
  return (
    <img src={img} alt="" className="theme__img" onClick={() => changeColor(color)} />
  )
}

export default ThemeItems