import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import { Products } from 'src/modules'
import { CartPage, ErrorPage } from '../routes'

import { CART, HOME } from '../routes/routesPaths'


const router = createBrowserRouter([
  {
    path: HOME,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: HOME,
        element: <Products />,
      },
      {
        path: CART,
        element: <CartPage />
      }
    ]
  },
])

export default router
