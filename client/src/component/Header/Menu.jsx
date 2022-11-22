import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { DataContext } from '../../GlobalContext';

import axios from 'axios'
import { toast } from 'react-toastify'

function Menu() {
    const context = useContext(DataContext)

    const [isLogged,setIsLogged] = context.data.authApi.isLogged
    const [isAdmin, setIsAdmin] = context.data.authApi.isAdmin
    const [isStudent, setIsStudent] = context.data.authApi.isStudent
    const [isTrainer, setIsTrainer] = context.data.authApi.isTrainer
    const [isHr] = context.data.authApi.isHr
    const [isAccount] = context.data.authApi.isAccount
    const [isCounseller] = context.data.authApi.isCounseller
    const [isMarketing] = context.data.authApi.isMarketing
    const [isManager] = context.data.authApi.isManager
  
    const [currentUser] = context.data.authApi.currentUser

    const navigate = useNavigate()

    const logoutUser = async () => {
        if(window.confirm(`Are you sure to logout?`)) {
           const res = await axios.get(`/api/v1/auth/logout`);
            localStorage.clear();
            if(isAdmin)  setIsAdmin(false)
            if(isStudent)  setIsStudent(false)
            if(isTrainer)  setIsTrainer(false)
            setIsLogged(false)
            toast.success(res.data.msg);
            window.location.href = "/";
        } else {
            return;
        }
    }

    // common route
    const commonRoute = () => {
        return (
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            Account
                    </NavLink>
                    <ul className="dropdown-menu">
                        
                        <li>
                        {
                                isAdmin ? <NavLink to={`/admin/dashboard`} className="dropdown-item">
                                     <i className="bi bi-speedometer2"></i> Dashboard</NavLink>
                                : null
                            }
                            {
                                isStudent ? <NavLink to={`/student/dashboard`} className="dropdown-item">
                                    <i className="bi bi-speedometer2"></i> Dashboard </NavLink>
                                : null
                            }
                            {
                                isTrainer ? <NavLink to={`/trainer/dashboard`} className="dropdown-item">
                                    <i className="bi bi-speedometer2"></i> Dashboard </NavLink>
                                : null
                            }
                            {
                                isHr ? <NavLink to={`/hr/dashboard`} className="dropdown-item">
                                    <i className="bi bi-speedometer2"></i> Dashboard </NavLink>
                                : null
                            }
                            {
                                isManager ? <NavLink to={`/manager/dashboard`} className="dropdown-item">
                                    <i className="bi bi-speedometer2"></i> Dashboard </NavLink>
                                : null
                            }
                            {
                                isAccount ? <NavLink to={`/account/dashboard`} className="dropdown-item">
                                    <i className="bi bi-speedometer2"></i> Dashboard </NavLink>
                                : null
                            }
                            {
                                isMarketing ? <NavLink to={`/marketing/dashboard`} className="dropdown-item">
                                    <i className="bi bi-speedometer2"></i> Dashboard </NavLink>
                                : null
                            }
                            {
                                isCounseller ? <NavLink to={`/counseller/dashboard`} className="dropdown-item">
                                    <i className="bi bi-speedometer2"></i> Dashboard </NavLink>
                                : null
                            }
                        </li>
                        <li>
                            {
                                isAdmin ? <NavLink to={`/admin/profile`} className="dropdown-item">
                                    <i className="bi bi-person"></i> Profile</NavLink>
                                : null
                            }
                            {
                                isStudent ? <NavLink to={`/student/profile`} className="dropdown-item">
                                    <i className="bi bi-person"></i> Profile</NavLink>
                                : null
                            }
                            {
                                isTrainer ? <NavLink to={`/trainer/profile`} className="dropdown-item">
                                    <i className="bi bi-person"></i> Profile</NavLink>
                                : null
                            }
                            {
                                isHr ? <NavLink to={`/hr/profile`} className="dropdown-item">
                                    <i className="bi bi-person"></i> Profile</NavLink>
                                : null
                            }
                            {
                                isManager ? <NavLink to={`/manager/profile`} className="dropdown-item">
                                    <i className="bi bi-person"></i> Profile</NavLink>
                                : null
                            }
                            {
                                isCounseller ? <NavLink to={`/counseller/profile`} className="dropdown-item">
                                    <i className="bi bi-person"></i> Profile</NavLink>
                                : null
                            }
                            {
                                isAccount ? <NavLink to={`/account/profile`} className="dropdown-item">
                                    <i className="bi bi-person"></i> Profile</NavLink>
                                : null
                            }
                            {
                                isMarketing ? <NavLink to={`/marketing/profile`} className="dropdown-item">
                                    <i className="bi bi-person"></i> Profile</NavLink>
                                : null
                            }
                        </li>
                        <li>
                            {
                                isAdmin ? <NavLink to={`/admin/users`} className="dropdown-item">
                                    <i className="bi bi-people"></i> Users</NavLink>
                                : null
                            }
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                            <NavLink to={`/`} onClick={logoutUser} className="dropdown-item btn btn-danger">Logout</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }



  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-secondary">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">
                    {
                        isLogged? (
                            <React.Fragment>
                                    { isAdmin ? "Admin-LMS-v1.0": null }
                                    { isStudent ? "Student-LMS-v1.0": null }
                                    { isTrainer ? "Trainer-LMS-v1.0": null }
                            </React.Fragment>
                        ): "LMS-v1.0"
                    }                    
            </NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={isLogged ? "collapse navbar-collapse justify-content-end": "collapse navbar-collapse justify-content-between"} id="menu">
                {
                    isLogged ? null : (
                        <nav className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={`/`} className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/about`} className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/contact`} className="nav-link">Contact</NavLink>
                            </li>
                        </nav>
                    )
                }
                {
                    isLogged ? commonRoute(): (
                        <nav className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={`/login`} className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/register`} className="nav-link">Register</NavLink>
                            </li>
                        </nav>
                    )
                }
            </div>
        </div>
    </nav>
  )
}

export default Menu