import React from 'react'
import { ThemeContext, ToggleThemeContext } from '../App'

import './ComponentTheme.css'

// So we can see below that Using the Context value is very messy. The below method of consuming the context value is not easy as it 
// includes longer syntax. When we w'll be passing multiple context Values It will become cumbersome to consume in the same component as we have to nest it multiple times
// So, To make it easier to consume the context value, React introduced useContext Hook after React 16.8. The use of useContext Hook
// for consuming the Context value will make the component code very concise and clear

const ComponentTheme = () => {
  return (
    <>
        <ThemeContext.Consumer>
            {(darkTheme)=>{
                const themeStyle = {
                    backgroundColor: darkTheme ? "#333" : "#CCC",
                    color: darkTheme ? "#CCC" : "#333"
                }
                
                return (
                    <ToggleThemeContext.Consumer>
                        {(toggleTheme)=>{
                            return (
                                <>
                                    <button onClick={toggleTheme}>Toggle Theme</button>
                                    <div className="theme" style={themeStyle} >{darkTheme ? "DarkTheme" : "LightTheme"}</div>
                                </>
                            )
                        }}
                    </ToggleThemeContext.Consumer>
                )
            }}
        </ThemeContext.Consumer>
    </>
  )
}

export default ComponentTheme
