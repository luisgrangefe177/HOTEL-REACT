import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/route.jsx";
import ErrorPage from "./error-page.jsx";
import { TodoForm } from "./components/TodoForm/TodoForm.jsx";

import Todo from "./components/Todo/Todo.jsx";
import { Component1Fixed } from "./components/context/solution.jsx";
import { Component1 } from "./components/context/example.jsx";
import { GrandParent } from "./components/Children/GrandParent.jsx";
import GlobalState from "./components/context/shared.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "form",
        element: <TodoForm />,
      },
      {
        path: "report",
        element: <Todo />,
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
