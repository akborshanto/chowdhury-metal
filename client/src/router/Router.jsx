import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../pages/home/Home";
import Errors from "../pages/error/Errors";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Errors></Errors>,
      children:[

        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);