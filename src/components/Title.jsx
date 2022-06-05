import React, { useContext, useState } from 'react'
import Switch from "react-switch"
import { themeContext } from '../App'

const Title = () => {
    const {theme,setTheme} = useContext(themeContext)

    const toggleSwitch = (checked) =>{
        setTheme(
            theme === 'dark' ? 'light' : 'dark'
        )
    }
    return (
        <div>
            <header className={theme}>
                <span>Mode [{theme}]</span>
                <Switch 
                    onChange={toggleSwitch} 
                    checked={theme==='dark'}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onColor={'#ffa500'}
                />
            </header>
        </div>
    )
}

export default Title