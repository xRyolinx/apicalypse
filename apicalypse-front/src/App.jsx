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
import { authStore } from './state/authStore'
import { Navigate } from 'react-router-dom'

function App() {
  // Centralize the authentication logic
  const {isLoggedIn} = authStore()

  const RequireAuth = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/signin" />;
    }
    return children;
  };
  const RequireNotAuth = ({ children }) => {
    if (isLoggedIn) {
      return <Navigate to="/expense-tracking" />;
    }
    return children;
  };


  // router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        {/* not user */}
        <Route path="/" element={<MainTemplate/>}>
          <Route index element={<HomePage/>}></Route>
        </Route>
        <Route element={<RequireNotAuth><MainTemplate/></RequireNotAuth> }>
          <Route path='signin' element={<SignPage />}></Route>
          <Route path='signup' element={<SignPage isLogin={false} />}></Route>
        </Route>
        {/* user */}
        <Route element={<RequireAuth><UserTemplate /></RequireAuth>}>
          <Route path='dashboard' element={<DashboardPage />}></Route>
          <Route path='expense-tracking' element={<ExpensePage />}></Route>
          <Route path='predicted-expenses' element={<DashboardPage />}></Route>
          <Route path='reports-generator' element={<DashboardPage />}></Route>
          <Route path='upload' element={<UploadPage />}></Route>
        </Route>   
        {/* not found */}
        <Route path='*' element={<NotFoundPage />}></Route>
      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App
