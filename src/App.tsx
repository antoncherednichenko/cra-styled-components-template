import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '__app__/router'
import { GlobalStyle } from '__app__/theme'

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}

export default App
