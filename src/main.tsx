import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

const axisMundi = document.getElementById('root')

if (axisMundi) {
  createRoot(axisMundi).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  const message = 'Error: The axisMundi is compromised.'
  console.log(message)
  alert(message)
  throw new Error(message)
}