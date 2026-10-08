import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import HomePage from './pages/Home/Home.jsx'
import ErrorPage from './pages/Error/Error.jsx'
import LoginPage from './pages/Login/LoginPage.jsx'

import './main.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/adminlogin",
        element: <LoginPage />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
