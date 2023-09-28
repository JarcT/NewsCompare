import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/Root'
import ErrorPage from './routes/ErrorPage'
import AboutPage from './routes/AboutPage'
import ArchivePage, {loader as archiveLoader }from './routes/ArchivePage'

import HomePage, {loader as screenshotsLoader} from './routes/HomePage'

function App() {



    const router = createBrowserRouter([
      {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <HomePage/>,
            loader: screenshotsLoader
          },
          {
            path: 'archive/',
            element: <ArchivePage/>,
            loader: archiveLoader
          },
          {
            path: 'about/',
            element: <AboutPage/>
          },

        ]
      }
    ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
