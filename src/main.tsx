import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import './index.css'
import Root from './routes/root'
import { Header } from './modules'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/contact',
    element: <Root />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <header>
      <Header />
    </header>

    <main>
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>,
)
