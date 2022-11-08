import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Main from "./Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<HomePage></HomePage>,
        },
        {
            path: "/home",
            element:<HomePage></HomePage>,
        }
      ]
    },
  ]);

  export default router;