import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Category from "../pages/Home/Category/Category";
import News from "../pages/News/News/News";
import NewsLayout from "../layout/NewsLayout";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/shared/LogReg/Login/Login";
import Registration from "../pages/shared/LogReg/Registration/Registration";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivetRoute>
            <News></News>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
