import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page.jsx";
import {HotelForm} from "../components/HotelForm/HotelForm.jsx";
import Hotel from "../components/hotel/Hotel.jsx";
import Root from "./root.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "form/:id_rooms?",
        element: <HotelForm/>,
      },
      {
        path: "report",
        element: <Hotel />,
      },
      
    ],
  },
  // {
  //   path: "form",
  //   element: <TodoForm />,
  // },
]);
