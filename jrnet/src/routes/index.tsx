import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Planos } from '../pages/Planos'
import { Empresa } from '../pages/Empresa'

const Routes = () => (
    <RouterProvider router={
        createBrowserRouter([
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/planos",
                element: <Planos />,
            },
            {
                path: "/empresa",
                element: <Empresa />,
            },
          
          ])
    } />
)

export { Routes }