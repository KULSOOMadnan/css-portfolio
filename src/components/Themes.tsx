'use client'
import React, { useEffect, useState } from 'react';
import '../styles/theme.css';
import { FaCog } from "react-icons/fa";
import {BsSun , BsMoon}from 'react-icons/bs';
import ThemeItems from '../components/ThemeItems';


const themes = [
    {id : 1 , img: '/assets/purple.png' , color : 'hsla(252 , 35% , 51%)'},
    {id : 2 , img: '/assets/orange.png' , color : 'hsla(19 , 96% , 52%)'},
    {id : 3 , img: '/assets/yellowgreen.png' , color : 'hsla(80 , 61% , 50%)'},
    {id : 4 , img: '/assets/yellow.png' , color : 'hsla(43, 83%, 51%)'},
    {id : 5 , img: '/assets/goldenrod.png' , color : 'hsla(43 , 74% ,49%)'},
    {id : 6 , img: '/assets/blue.png' , color : 'hsla(225 , 72% ,57%)'},
    {id : 7 , img: '/assets/blueviolet.png' , color : 'hsla(271, 76% , 53%)'},
    {id : 8 , img: '/assets/red.png' , color : 'hsla(4 , 93% , 54%)'},
    {id : 9 , img: '/assets/magenta.png' , color : 'hsla(339, 82% , 66%)'},
    {id : 10 , img: '/assets/green.png' , color : 'hsla(80, 79%, 26%)'},
]

const getStorageColor = () : string => {
    let color : string  = 'hsl(339, 71%, 38% )'
    if(localStorage.getItem('color')){
        color = localStorage?.getItem('color') || 'hsl(339, 71%, 38%)'
    }
    return color;
}
const getStorageTheme = () : string => {
    let theme : string  = 'light-theme'
    if(localStorage.getItem('theme')){
        theme = localStorage?.getItem('theme') || 'light-theme'
    }
    return theme;
}


function Themes() {
    const [showSwitcher , setShowSwitcher] = useState(false);
    const [color , setColor] = useState(getStorageColor());
    const [theme , setTheme] = useState(getStorageTheme())

    const changeColor = (color : string) => {
        setColor(color)
    }
    
    const toggleTheme = () => {
        if(theme === 'light-theme'){
            setTheme('dark-theme')
        } else{
            setTheme('light-theme')
        }
    }   

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color' , color);
        localStorage.setItem('color' ,color);
    } ,[color])
    
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme' ,theme);
    } ,[theme])
    return (
    <div>
        <div className={`${showSwitcher ? 'show-switcher' : 'style__switcher'} style__switcher `} >
            <div className="style__switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
                <FaCog/>
            </div>

            <div className="theme__toggler" onClick={toggleTheme}>
               {theme === 'light-theme' ? <BsMoon/> : <BsSun/>}
            </div>

            <h3 className='style__switcher-title'> Style Switcher</h3>
            <div className="style__switcher-items">
                {themes.map((theme , index) => {
                    return <ThemeItems key={index} {...theme} changeColor={changeColor}/>
                })}
            </div>
            
             <div className="style__switcher-close" onClick={() => setShowSwitcher(!showSwitcher)} >&times;</div>
        </div>

    </div>
  )
}

export default Themes