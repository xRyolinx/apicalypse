import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import HomePage from './pages/Home/HomePage'
import MainTemplate from './templates/MainTemplate'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import SignPage from './pages/Sign/SignPage'
import UploadPage from "./pages/Upload/UploadPage"

function App() {
  // router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainTemplate />}>
        <Route index element={<HomePage />}></Route>
        <Route path='signin' element={<SignPage />}></Route>
        <Route path='signup' element={<SignPage isLogin={false} />}></Route>
        <Route path='upload' element={<UploadPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App
