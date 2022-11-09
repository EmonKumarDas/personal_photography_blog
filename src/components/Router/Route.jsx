import { createBrowserRouter } from "react-router-dom";
import AddService from "../addService/AddService";
import ErrorPage from "../errorPage/ErrorPage";
import AllCategories from "../pages/AllCategories";
import CardDetails from "../pages/CardDetails";
import HomePage from "../pages/HomePage";
import MyReview from "../pages/MyReview";
import Login from "../SignIn/Login";
import Registration from "../SignIn/Registration";
import Main from "./Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
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
        element:<PrivateRoute>
          <MyReview></MyReview>
        </PrivateRoute>
      },
      {
        path:"/addservices",
        element:<PrivateRoute>
          <AddService></AddService>
        </PrivateRoute>
      }

      ]
    },
  ]);

  export default router;