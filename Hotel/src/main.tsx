import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './modules/App.tsx'
import "./App.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
