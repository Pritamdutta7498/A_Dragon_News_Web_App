import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import News from "../pages/News/News/News";
import NewsLayout from "../layout/NewsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/category/:id',
        element:<Category></Category>,
        loader: ({params}) =>fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ],
  },
  {
    path:"news",
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path:':id',
        element:<News></News>
      }
    ]
  }
]);

export default router;
