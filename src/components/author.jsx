import React from 'react'
import { Link } from 'react-router-dom'
import BASE_URL from '../api';

function Author({author, onDelete}) {




  const handleDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL}/authors/author/${author._id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Author deleted successfully')
        alert('Author deleted successfully');
        onDelete(author._id)
      } else {
        alert('Failed to delete author');
        console.log('Failed to delete author')
      }
    } catch (error) {
      console.error('Error deleting author:', error);
      alert('Error deleting author');
    }
  };


  return (
    <div className="col-lg-3">
            <div className="card author" style={{ width: "18rem" }}>
              <img src={author.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{author.name}</h5>
              </div>
              <div className="card-body">
                <Link to={`/authors/updateAuthor/${author._id}`}>
                <button  className="card-link">
                  Update
                </button>
                </Link>
                <button  className="card-link" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>

          </div>
  )
}

export default Author