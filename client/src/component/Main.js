import React, { useContext } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { DataContext } from '../GlobalContext'
import ProtectedRoute from '../middleware/ProtectedRoute'
import history from '../middleware/History'

import { ToastContainer } from 'react-toastify'

import Login from './Auth/Login'
import Register from './Auth/Register'
import About from './Default/About'
import Contact from './Default/Contact'
import Home from './Default/Home'
import Menu from './Header/Menu'
import Pnf from './util/Pnf'
import AdminDashboard from './Admin/AdminDashboard'
import AdminProfile from './Admin/AdminProfile'
import StudentDashboard from './Student/StudentDashboard'
import StudentProfile from './Student/StudentProfile'
import TrainerDashboard from './Trainer/TrainerDashboard'
import TrainerProfile from './Trainer/TrainerProfile'
import AllUsers from './Admin/AllUsers'
import Footer from './Header/Footer'
import ManagerDashboard from './Manager/ManagerDashboard'
import ManagerProfile from './Manager/ManagerProfile'
import HRDashboard from './HR/HRDashboard'
import HRProfile from './HR/HRProfile'
import MarketingDashboard from './Marketing/MarketingDashboard'
import MarketingProfile from './Marketing/MarketingProfile'
import CounsellerDashboard from './Counseller/CounsellerDashboard'
import CounsellerProfile from './Counseller/CounsellerProfile'
import AccountantDashboard from './Account/AccountantDashboard'
import AccountantProfile from './Account/AccountantProfile'


function Main() {
  const context = useContext(DataContext)
  const [isLogged] = context.data.authApi.isLogged
  const [isStudent] = context.data.authApi.isStudent
  const [isTrainer] = context.data.authApi.isTrainer
  const [isAdmin] = context.data.authApi.isAdmin
  const [isHr] = context.data.authApi.isHr
  const [isAccount] = context.data.authApi.isAccount
  const [isCounseller] = context.data.authApi.isCounseller
  const [isMarketing] = context.data.authApi.isMarketing
  const [isManager] = context.data.authApi.isManager

  return (
    <Router history={history}>
        <Menu/>
        <ToastContainer autoClose={5000} position={'top-right'} />
        <Routes>
                <Route path={`/`} element={
                    isLogged ? 
                      (<>
                        { isAdmin ? <Navigate to={`/admin/dashboard`} />: null}
                        { isStudent ? <Navigate to={`/student/dashboard`} />: null}
                        { isTrainer ? <Navigate to={`/trainer/dashboard`} />: null}
                      </>) : <Home/>
                } />
                <Route path={`/about`} element={isLogged ? <Navigate to={`/*`} /> : <About/>} />
                <Route path={`/contact`} element={isLogged ? <Navigate to={`/*`} /> : <Contact/>} />
                <Route path={`/login`} element={isLogged ? <Navigate to={`/*`} /> : <Login/>} />
                <Route path={`/register`} element={isLogged ? <Navigate to={`/*`} /> : <Register/>} />
                {
                  isLogged && isAdmin ? (
                      <Route element={<ProtectedRoute/>} >
                          <Route path={`/admin/dashboard`} element={<AdminDashboard/>} />
                          <Route path={`/admin/users`} element={<AllUsers/>} />
                          <Route path={`/admin/profile`} element={<AdminProfile/>} />
                      </Route>
                  ) : null
                }
                {
                  isLogged & isStudent ? (
                      <Route element={<ProtectedRoute/>} >
                          <Route path={`/student/dashboard`} element={<StudentDashboard/>} />
                          <Route path={`/student/profile`} element={<StudentProfile/>} />
                      </Route>
                  ) : null
                }
                {
                  isLogged & isTrainer ? (
                      <Route element={<ProtectedRoute/>} >
                          <Route path={`/trainer/dashboard`} element={<TrainerDashboard/>} />
                          <Route path={`/trainer/profile`} element={<TrainerProfile/>} />
                      </Route>
                  ) : null
                }
                {
                  isLogged & isManager ? (
                      <Route element={<ProtectedRoute/>} >
                          <Route path={`/manager/dashboard`} element={<ManagerDashboard/>} />
                          <Route path={`/manager/profile`} element={<ManagerProfile/>} />
                      </Route>
                  ) : null
                }
                {
                  isLogged & isHr ? (
                      <Route element={<ProtectedRoute/>} >
                          <Route path={`/hr/dashboard`} element={<HRDashboard/>} />
                          <Route path={`/hr/profile`} element={<HRProfile/>} />
                      </Route>
                  ) : null
                }
                {
                  isLogged & isMarketing ? (
                      <Route element={<ProtectedRoute/>} >
                          <Route path={`/marketing/dashboard`} element={<MarketingDashboard/>} />
                          <Route path={`/marketing/profile`} element={<MarketingProfile/>} />
                      </Route>
                  ) : null
                }
                {
                  isLogged & isAccount ? (
                      <Route element={<ProtectedRoute/>} >
                          <Route path={`/account/dashboard`} element={<AccountantDashboard/>} />
                          <Route path={`/account/profile`} element={<AccountantProfile/>} />
                      </Route>
                  ) : null
                }
                {
                  isLogged & isCounseller ? (
                      <Route element={<ProtectedRoute/>} >
                          <Route path={`/counseller/dashboard`} element={<CounsellerDashboard/>} />
                          <Route path={`/counseller/profile`} element={<CounsellerProfile/>} />
                      </Route>
                  ) : null
                }
              <Route path={`/*`} element={<Pnf/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default Main