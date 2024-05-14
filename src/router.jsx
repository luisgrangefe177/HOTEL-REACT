import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import { Component1Fixed } from "./components/context/solution.jsx";
import { Component1 } from "./components/context/example.jsx";
import { GrandParent } from "./components/Children/GrandParent.jsx";
import GlobalState from "./components/context/shared.jsx";
import HotelForm from "./components/HotelForm/HotelForm.jsx";
import Hotel from "./components/hotel/Hotel.jsx";
import Root from "./routes/root.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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
      {
        path: "contextFixed",
        element: <Component1Fixed />,
      },
      {
        path: "context",
        element: <Component1 />,
      },
      {
        path: "children",
        element: <GrandParent />,
      },
      {
        path: "globalState",
        element: <GlobalState />,
      },
    ],
  },
  // {
  //   path: "form",
  //   element: <TodoForm />,
  // },
]);
