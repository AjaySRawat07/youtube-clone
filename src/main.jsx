import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UtilContextProvider} from './context/UtilsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <AuthProvider>
         <UtilContextProvider>
               <App />
         </UtilContextProvider>
      </AuthProvider>
   </BrowserRouter>
)
