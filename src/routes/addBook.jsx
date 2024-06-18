import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../api';

function AddBook() {


const [responseMsg, setresponseMsg] = useState("")

const [bookName, setBookName] = useState('');
const [image, setImage] = useState('');
const [author, setAuthor] = useState('');
const [publishedAt, setPublishedAt] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');

const navigate = useNavigate( )

const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'bookName':
        setBookName(value);
        break;
      case 'image':
        setImage(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'publishedAt':
        setPublishedAt(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        break;
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newBook = {
      bookName,
      image,
      author,
      publishedAt,
      description,
      price,
    };
  
    try {
      const response = await fetch(`${BASE_URL}/books/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });
  
      if (!response.ok) {
       
        const errorData = await response.json();
        console.log('Backend error:', errorData);
        throw new Error(errorData.message); 
        setresponseMsg(errorData.message)
      }
  
     
      const addedBook = await response.json();
      console.log('Book added successfully:', addedBook);
      setresponseMsg('Book added successfully');
      setTimeout(()=>{
        navigate('/books')
      },3000)
      
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error.message);
      setresponseMsg(error.message); 
    }
  };



  return (
    <main className='update-book-sec bg-dark w-100'>
         <div className="container">
             <form className="form " onSubmit={handleSubmit}>
                <div className="row  mt-3">
                <div className="col-4">
                    <label htmlFor="bookName" className="form-label">Book Name</label>
                    <input type="text" className="form-control" placeholder='Enter the book name'  name="bookName" value={bookName} onChange={handleChange}/>
                </div>
                <div className="col-4">
                    <label htmlFor="bookImage" className="form-label">Image</label>
                    <input type="text" className="form-control" placeholder='Enter the url of image or image link'  name="image" value={image} onChange={handleChange}/>
                </div>
                <div className="col-4">
                    <label htmlFor="author" className="form-label">Author Name</label>
                    <input type="text" className="form-control" placeholder='Enter the author name' name="author" value={author} onChange={handleChange}/>
                </div>
                </div>
                <div className="row g-3 mt-3">
                <div className="col-lg-3">
                    <label htmlFor="publishedAt" className="form-label">Published At</label>
                    <input type="date" className="form-control" name="publishedAt" value={publishedAt} onChange={handleChange}/>
                </div>

                <div className="col-lg-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" name="price" value={price} onChange={handleChange}/>
                </div>
                </div>
                <div className="row g-3 mt-3">
                <div className="col-lg-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea  col={10} rows={8} id="description" className="form-control" placeholder='Enter the description of the book' name="description" value={description} onChange={handleChange}></textarea>
                </div>
                </div>
                <button type={'submit'} data-bs-toggle="modal" data-bs-target="#exampleModal">Add Book</button>

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

export default AddBook