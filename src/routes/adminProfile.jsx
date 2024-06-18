import React from 'react'
import userImg from "../assets/user.png"

function AdminProfile() {
  return (
    <main className='admin-profile bg-dark w-100'>
       <div className="container">
          <div className="admin-box">
              <div className="admin-img">
                 <img src={userImg} alt="" />
              </div>
              <div className="admin-des">
                  <h6 className='text-secondary'>Name : </h6> <h3>BookStore Admin</h3>
                  <h6 className='text-secondary'>Email : </h6> <h3>bookstoreadmin@gmail.com</h3>
              </div>
          </div>
       </div>
    </main>
  )
}

export default AdminProfile