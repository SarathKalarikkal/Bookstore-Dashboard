import React from 'react'

function Home() {
  return (
    <main className='home-sec bg-dark w-100'>
       <div className="container">
           <div className="home-content text-white">
           <h1>Welcome to Bookstore Dashboard</h1>
           <p>Manage your bookstore efficiently with our admin panel. Here you can easily add, delete, and update books and authors.</p>
               
               <div className='features'>
                 <span><i className="bi bi-journal-plus"></i> Add Books</span>
                 <span><i className="bi bi-journal-arrow-up"></i> Upate Book</span>
                 <span><i className="bi bi-person-plus"></i>Add Authors</span>
                 <span><i className="bi bi-person-gear"></i> Update Author</span>
               </div>
           </div>
       </div>
    </main>
  )
}

export default Home