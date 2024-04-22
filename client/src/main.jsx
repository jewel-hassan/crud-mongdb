import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import ErrorPage from './components/error-page';
import Createuser from './components/Createuser';
import Update from './components/Update';
import User from './components/User';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/create",
        element:<Createuser/>
      },
      {
        path:"/update/:id",
        element:<Update/>
      },
      {
        path:"/",
        element:<User/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
