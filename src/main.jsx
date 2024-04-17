import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import Vente from './pages/vente.jsx';
import Location from './pages/location.jsx';
import Layout from './components/layout.jsx';
import './index.css'


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
          element:<Vente/>
        },
        {
          path:"/location",
          element:<Location/>
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
