import { useState } from 'react'
import Tan from "./tan"

function App() {
  const username ="chai aur code"
  const [count, setCount] = useState(0)

  return (/* react in jsx return single ele if we want to write 
    multiple elements closed them inside <div> or <>(empty fragment)*/
    <> 
      <Tan/>
      <h1>Tan is ready to learn react{username}</h1>
      <p>Test paragarph</p>
    </>
  )
}

export default App
