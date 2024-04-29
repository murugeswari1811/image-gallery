import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/app",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
