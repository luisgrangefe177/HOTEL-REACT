import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
/* existing imports */
import Root from "./routes/root";

// hacemos importacion del error
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HotelForm from './components/HotelForm/HotelForm';
import Hotel from './components/hotel/Hotel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "form",
        element: <HotelForm/>,
      },
      {
        path: "report",
        element: <Hotel />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
