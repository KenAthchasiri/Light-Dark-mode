import React, { useContext } from 'react'
import light from '../assets/light.svg'
import dark from '../assets/dark.svg'
import { themeContext } from '../App'



const Content = () => {
    const {theme} = useContext(themeContext)

    return (
        <main className={theme}>
            <div>
                <h1>KENJIRAKIT Learning</h1>
                <p>DarkMode Workshop</p>
            </div>
            {theme === 'light' && <img src={light} alt="logo-light" />}
            {theme === 'dark' && <img src={dark} alt="logo-dark" />}
        </main>
        
    )
}

export default Content