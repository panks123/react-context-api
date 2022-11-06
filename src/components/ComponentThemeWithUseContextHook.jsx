import React, {useContext} from 'react'
import { ThemeContext, ToggleThemeContext } from '../App'


const ComponentThemeWithUseContextHook = () => {
    // useContext takes the Context object as an argument
    const isDarkTheme = useContext(ThemeContext)
    const toggleDarkTheme = useContext(ToggleThemeContext)

    const themeStyle = {
        backgroundColor: isDarkTheme ? "#333" : "#CCC",
        color: isDarkTheme ? "#CCC" : "#333"
    }

    // We can see below that how much concise it has become using useContext Hook for Consuming the context Values
  return (
    <>
        <button onClick={toggleDarkTheme}>Toggle Theme</button>
        <div className="theme" style={themeStyle} >{isDarkTheme ? "DarkTheme" : "LightTheme"} is active</div>
    </>
  )
}

export default ComponentThemeWithUseContextHook
