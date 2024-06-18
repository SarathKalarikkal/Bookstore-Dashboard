import React from 'react'
import { Link } from 'react-router-dom'
import BASE_URL from '../api';

function Book({book, onDelete }) {

 

  const handleDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL}/books/book/${book._id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Book deleted successfully')
        alert('Book deleted successfully');
        onDelete(book._id)
      } else {
        alert('Failed to delete book');
        console.log('Failed to delete book')
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Error deleting book');
    }
  };

  
  return (
    <div className="col-lg-3">
            <div className="card book" style={{ width: "18rem" }}>
              <img src={book.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{book.bookName}</h5>
              </div>
              <div className="card-body">
                <Link to={`/books/updateBook/${book._id}`}>
                <button  className="card-link">
                  Update
                </button>
                </Link>
                <button  className="card-link" onClick={handleDelete} >
                  Delete
                </button>
                
              </div>
            </div>

          </div>
  )
}

export default Book