import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import ShareContext from './contextAPI/ShareContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
      <GoogleOAuthProvider clientId='528528923650-f2517b3he78jmlu84t5qrladucnubebf.apps.googleusercontent.com'>
        <ShareContext>
           <App />
        </ShareContext>
          </GoogleOAuthProvider>
      </BrowserRouter>
      <ToastContainer position="top-center"/>
    </StrictMode>,
)
