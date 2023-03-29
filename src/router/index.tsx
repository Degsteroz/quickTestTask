import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import React from 'react'
import { Products } from '../modules'
import { ErrorPage } from '../routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
    ]
  },
])

export default router
