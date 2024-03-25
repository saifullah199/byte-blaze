import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Component/layouts/MainLayouts";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import Bookmarks from "../Pages/Bookmarks";
import Content from "../Component/Content";
import Author from "../Component/Author";

export const router = createBrowserRouter([
    {
      path: '/',
      element : <MainLayouts></MainLayouts>,
      children: [
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'blogs',
          element: <Blogs></Blogs>,
          loader: () => fetch ('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path: '/blog/:id',
          element: <Blog></Blog>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index: true,
                element: <Content></Content>
            },
            {
                path:'author',
                element: <Author></Author>
            }
          ]
        },
        {
          path:'bookmarks',
          element:<Bookmarks></Bookmarks>,
        }
  
      ]
    },
    
  ])