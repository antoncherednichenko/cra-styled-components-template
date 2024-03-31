import { lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from 'pages/Home'
import { PAGE_ROUTES } from './constants'

// const AboutLazy = lazy(() => import('../../pages/About'))

export const router = createBrowserRouter([
  {
    element: (
      // Сюда добавить Лэйаут, а внутри него Suspense
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: PAGE_ROUTES.Home,
        element: <Home />,
      },
    ],
  },
])
