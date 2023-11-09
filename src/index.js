import React from 'react'
// import { createRoot, hydrateRoot } from 'react-dom/client'
import { createRoot } from 'react-dom/client'

function Greeting() {
  return <h2>My First Component</h2>
}

const root = createRoot(document.getElementById('root'))

root.render(<Greeting></Greeting>)
