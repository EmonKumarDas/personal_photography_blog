import { createBrowserRouter } from "react-router-dom";
import AllCategories from "../pages/AllCategories";
import CardDetails from "../pages/CardDetails";
import HomePage from "../pages/HomePage";
import MyReview from "../pages/MyReview";
import Login from "../SignIn/Login";
import Registration from "../SignIn/Registration";
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
      },
        {
          path: "/allCategories",
          loader:()=>fetch("http://localhost:5000/services"),
          element:<AllCategories></AllCategories>,
      },
        {
          path: "/login",
          element:<Login></Login>,
      },
        {
          path: "/register",
          element:<Registration></Registration>,
      },
      {
        path:"/review",
        element:<MyReview></MyReview>
      }

      ]
    },
  ]);

  export default router;