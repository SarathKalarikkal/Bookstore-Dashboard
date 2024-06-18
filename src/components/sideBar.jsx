import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SideBar() {
    const location =  useLocation()

   const isActive = (path)=>{
      return location.pathname === path
   }

  return (
      <div
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sideBar" >
          <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
             <i className='bi bi-book fs-4 me-2'></i>
              <span className="fs-4">BookStore</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                  <Link to={'/'} className={`nav-link text-white ${isActive('/')? 'active' : ""}`} aria-current="page">
                    <i className="bi bi-house me-2"></i>
                      Home
                  </Link>
              </li>
              <li>
                  <Link to={'/books'} className={`nav-link text-white ${isActive('/books')? 'active' : ""}`}>
                   <i className="bi bi-journals  me-2"></i>
                      Books
                  </Link>
              </li>
              <li>
                  <Link to={'/authors'} className={`nav-link text-white ${isActive('/authors')? 'active' : ""}`}>
                   <i className="bi bi-person-lines-fill  me-2"></i>
                      Authors
                  </Link>
              </li>
              <li>
                  <Link to={'/users'} className={`nav-link text-white ${isActive('/users')? 'active' : ""}`}>
                   <i className="bi bi-people-fill  me-2"></i>
                      Users
                  </Link>
              </li>
              
          </ul>
          <hr />
          <div className="dropdown">
              <Link
                  to={'#'}
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                  <img
                      src="https://github.com/mdo.png"
                      alt=""
                      width={32}
                      height={32}
                      className="rounded-circle me-2"
                  />
                  <strong>Admin</strong>
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  
                  <li>
                      <Link className={`dropdown-item ${isActive('/profile')? 'active' : ""}`} to={"/profile"}>
                          Profile
                      </Link>
                  </li>
                  <li>
                      <hr className="dropdown-divider" />
                  </li>
                  <li>
                      <Link className="dropdown-item" to={"/admin/login"}>
                          Sign out
                      </Link>
                  </li>
              </ul>
          </div>
      </div>

  )
}

export default SideBar