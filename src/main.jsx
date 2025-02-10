import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import router from './Router/Router.jsx'
import { RouterProvider, } from "react-router-dom";
import AuthProvider from './pages/provider/AuthProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
