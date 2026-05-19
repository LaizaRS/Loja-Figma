import { ThemeProvider } from '@material-tailwind/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rotas from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Rotas />
    </ThemeProvider>
  </StrictMode>,
)
