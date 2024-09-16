import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalSytles from './styles/GlobalStyles.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <GlobalSytles/>
    <App />
    </>
  </StrictMode>,
)
