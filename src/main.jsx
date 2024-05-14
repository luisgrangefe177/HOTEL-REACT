import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
/* existing imports */
// hacemos importacion del error
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { HotelProvider } from './context/HotelProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HotelProvider>
      {/*Tenemos nuestro Componente main el principal */}
    <RouterProvider router={router} /> 
    </HotelProvider>
    {/* <App/> */}
    
  </React.StrictMode>,
)
