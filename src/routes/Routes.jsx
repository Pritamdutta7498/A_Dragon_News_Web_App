import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Category from "../pages/Home/Category/Category";
import News from "../pages/News/News/News";
import NewsLayout from "../layout/NewsLayout";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/shared/LogReg/Login/Login";
import Registration from "../pages/shared/LogReg/Registration/Registration";
import PrivetRoute from "./PrivetRoute";
import Terms from "../pages/shared/Terms/Terms";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/shared/About/About";
import Career from "../pages/shared/Career/Career";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/career',
        element:<Career/>
      },
    ]
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      // {
      //   path: "/",
      //   element: <Navigate to="/category/0"></Navigate>,
      // },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path:'term',
        element:<Terms/>

      }
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
          fetch(`https://dragon-news-server-pritamdutta7498.vercel.app/categories/${params.id}`),
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
          fetch(`https://dragon-news-server-pritamdutta7498.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
