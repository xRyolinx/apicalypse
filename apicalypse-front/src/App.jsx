import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import HomePage from './pages/Home/HomePage'
import MainTemplate from './templates/MainTemplate'
import UserTemplate from './templates/UserTemplate'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import SignPage from './pages/Sign/SignPage'
import UploadPage from "./pages/Upload/UploadPage"
import DashboardPage from './pages/Dashboard/DashboardPage'
import ExpensePage from './pages/Expense/ExpensePage'

function App() {
  // router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        {/* not user */}
        <Route element={<MainTemplate />}>
          <Route index element={<HomePage />}></Route>
          <Route path='signin' element={<SignPage />}></Route>
          <Route path='signup' element={<SignPage isLogin={false} />}></Route>
          <Route path='upload' element={<UploadPage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
        {/* user */}
        <Route element={<UserTemplate />}>
          <Route path='dashboard' element={<DashboardPage />}></Route>
          <Route path='expense-tracking' element={<ExpensePage />}></Route>
          <Route path='predicted-expenses' element={<DashboardPage />}></Route>
          <Route path='reports-generator' element={<DashboardPage />}></Route>
        </Route>
      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App
