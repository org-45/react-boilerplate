import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { AdminProvider } from './contexts/AdminContext.tsx'

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <AdminProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </AdminProvider>
  </StrictMode>
)