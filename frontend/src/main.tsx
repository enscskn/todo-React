// Main App Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Main Components
import App from './App.tsx'

// CSS
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
