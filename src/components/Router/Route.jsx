import { createBrowserRouter } from "react-router-dom";
import CardDetails from "../pages/CardDetails";
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
        },

        {
          path: "/cartDetail/:id",
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
          element:<CardDetails></CardDetails>,
      }

      ]
    },
  ]);

  export default router;