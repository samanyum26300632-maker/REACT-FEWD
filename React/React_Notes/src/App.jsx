import React from 'react'
import Music_Instruments, { Greet } from "./function.jsx";

function App() {
  return (
    <div>
      <h1>Hi, SAM</h1>

      <Music_Instruments title="Guitar" price={6000} />
      <Music_Instruments title="Tabla" price={3500} />
      <Music_Instruments title="Dholak" price={3400} />

      <Greet name="Samanyu Mathur" squad={168} />
     
    </div>
  )
}

export default App
