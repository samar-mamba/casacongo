import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import Vente from './pages/vente.jsx';
import Location from './pages/location.jsx';
import Layout from './components/layout.jsx';
import './index.css'
import HouseList from './components/house-list.jsx';
import HouseDetails from './components/house-details.jsx';
import LoginForm from './components/login-form.jsx';


 const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/vente",
          element:<Vente/>,
          children:[
            {
              path:"",
              element:<HouseList/>
            },
            {
              path:":id",
              element:<HouseDetails/>
            }
          ]
        },
        {
          path:"/location",
          element:<Location/>
        },
        {
          path:"/login-form",
          element:<LoginForm  />


        }

      ]
    }
  ]

 )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
