import React from 'react'
import { Fname } from '../App'

// Now we want to consume the value passed with the context Provider - This time we don't have to do prop drilling as we are using the context
const ComponentC = (props) => {
  return (
    <>
        <Fname.Consumer>
          {/* It takes a function which will return The JSX */}
            {/*  render something based on the context value */}
            { (fname)=>{
                return (
                    <h1> My name is {fname}</h1>
                )
            }}
        </Fname.Consumer>
    </>
  )
}

export default ComponentC
