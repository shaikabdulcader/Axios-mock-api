import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
export const API_URL = "https://6597a91a668d248edf23234d.mockapi.io/users"

const App = () => {
  const router = createBrowserRouter(AppRoutes)
  return (
  <>
  <RouterProvider router={router} />
  </>
  )
}

export default App