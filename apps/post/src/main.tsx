import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./theme.css";
import './index.css'
import App from './App.tsx'
import { EnvProvider } from '@repo/shared/providers/env-provider.tsx'
import { env } from './config/env.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EnvProvider env={env}>
      <App />
    </EnvProvider>
  </StrictMode>,
)
