import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/sideBar'


function Root() {
  return (
    <div className='d-flex'>
        <SideBar />
         <Outlet />
    </div>
  )
}

export default Root