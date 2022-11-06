import { createContext, useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentTheme from "./components/ComponentTheme"
import ComponentThemeWithUseContextHook from "./components/ComponentThemeWithUseContextHook"

import './App.css'

// Context API 
// In React applications some data is needed by many components. That data we pass through props. But in complex applications if 
// we pass using props, using props drilling, we may pass the data to intermediate components which may not need that data. Also this prop drilling 
// will become very cumbersome to maintain the application

// So there is a solution to avoid this : Context API
// Context : Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// Context is designed to share data that can be considered “global” for a tree of React components, 
// such as the current authenticated user, theme, or preferred language.

const Fname = createContext() // It creates a Context Object - Fname is a Context Object

const ThemeContext =  createContext()
const ToggleThemeContext = createContext()

// we can also pass default value in createContext as:
// const fname = createContext(defaultValue) // The defaultValue argument is only used when a component does not have a matching Provider above it in the tree

function App() {
  // let fname = "Pankaj"

  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = ()=>{
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
    {/* Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    All the Children of this Provider can use the value prop passed to the consumers(i.e children of this Provider) */}

    {/* All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.  */}

      <Fname.Provider value={"Pankaj"}>
        <ComponentA/>
      </Fname.Provider>
      <hr />
      <ThemeContext.Provider value={darkTheme}>
        <ToggleThemeContext.Provider value={toggleTheme}>      
          <ComponentTheme/>
          <div className="toggle-theme">
            <button onClick={toggleTheme}>Toggle Theme here</button>
          </div>
          <hr />
          <h3>Using useContext Hook</h3>
          <ComponentThemeWithUseContextHook/>
        </ToggleThemeContext.Provider>
        
      </ThemeContext.Provider>
    </>
      
  );
}
// We need to export the created Context object
export {Fname, ThemeContext, ToggleThemeContext} 


export default App;
