import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router'
import BillProvider from './context/BillContext/BillProvider'
import AuthProvider from './context/AuthContext/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BillProvider>
        <RouterProvider router={router} ></RouterProvider>
      </BillProvider>
    </AuthProvider>
  </StrictMode>,
)
