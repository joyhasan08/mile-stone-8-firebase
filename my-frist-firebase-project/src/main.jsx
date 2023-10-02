import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './Component/Login_Page/LoginPage.jsx';
import HomePage from './Component/Home/HomePage.jsx';
import RegisterPage from './Component/Login_Page/RegisterPage.jsx';
import ForgotPassword from './Component/Login_Page/ForgotPassword.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/home",
        element: <HomePage></HomePage>
      },
      {
        path: "/reg",
        element: <RegisterPage></RegisterPage>
      },
      {
        path: "/forgot",
        element: <ForgotPassword></ForgotPassword>
      }

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
