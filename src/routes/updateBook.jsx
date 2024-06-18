import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BASE_URL from '../api';

function UpdateBook() {



 let {id} =useParams()
 console.log("useparams", id)

 const [book, setBook] = useState(null)
 const [responseMsg, setresponseMsg] = useState("")


 const fetchBook = async ()=>{
    const response = await fetch(`${BASE_URL}/books/book/${id}`);
     const data = await response.json();
    setBook(data);
    }

useEffect(()=>{
       fetchBook()
},[id])


const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook(prevState => ({
     ...prevState,
      [name]: value,
    }));
  };

const handleSubmit = async (event) => {

    event.preventDefault();

    const updatedBook = {
        bookName: book.bookName,
        image : book.image,
        publishedAt : book.publishedAt,
        author : book.author,
        price : book.price,
        description : book.description
    };

    const response = await fetch(`${BASE_URL}/books/book/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
      });
    
      if (response.ok) {
        setresponseMsg("Book updated successfully")
      } else {
        setresponseMsg('Failed to update book')
      }

}


  return (
    <main className='update-book-sec bg-dark w-100'>
         <div className="container">
             <form className="form " onSubmit={handleSubmit}>
                <div className="row  mt-3">
                <div className="col-4">
                    <label htmlFor="bookName" className="form-label">Book Name</label>
                    <input type="text" className="form-control" placeholder='Enter the book name' name="bookName" value={book? (book.bookName) : ''} onChange={handleInputChange}/>
                </div>
                <div className="col-4">
                    <label htmlFor="bookImage" className="form-label">Image</label>
                    <input type="text" className="form-control" placeholder='Enter the url of image or image link' name="bookImage" value={book? (book.image) : ''} onChange={handleInputChange}/>
                </div>
                <div className="col-4">
                    <label htmlFor="author" className="form-label">Author Name</label>
                    <input type="text" className="form-control" placeholder='Enter the author name' name="author" value={book? (book.author) : ''} onChange={handleInputChange}/>
                </div>
                </div>
                <div className="row g-3 mt-3">
                <div className="col-lg-3">
                    <label htmlFor="publishedAt" className="form-label">Published At</label>
                    <input type="text" className="form-control" name="publishedAt" value={book? (book.publishedAt) : ''} onChange={handleInputChange}/>
                </div>

                <div className="col-lg-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" name="price" value={book? (book.price) : ''} onChange={handleInputChange}/>
                </div>
                </div>
                <div className="row g-3 mt-3">
                <div className="col-lg-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea  col={10} rows={8} id="description" className="form-control" placeholder='Enter the description of the book' name="description" value={book? (book.description) : ''} onChange={handleInputChange}></textarea>
                </div>
                </div>
                <button type={'submit'} data-bs-toggle="modal" data-bs-target="#exampleModal">Update Book</button>
                  <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                  >
                      <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                              <div className="modal-header">
                                   <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                  />
                              </div>
                              <div className="modal-body">{responseMsg && responseMsg }</div>

                          </div>
                      </div>
                  </div>

             </form>
         </div>
    </main>
  )
}

export default UpdateBook