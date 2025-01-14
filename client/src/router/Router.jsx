import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../pages/home/Home";
import Errors from "../pages/error/Errors";
import Task from "../pages/module/Task";
import Users from "../pages/module/user";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Errors></Errors>,
      children:[

        {
            path:"/",
            element:<Home></Home>
        },
        {
            index:true,
            element:<Task></Task>
        },
        {
            path:"users",
            element:<Users></Users>
        },
      ]
    },
  ]);