import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BASE_URL from '../api'



function UpdateAuthor() {

const {id} = useParams()

const [author, setAuthor] = useState(null)
const [responseMsg, setresponseMsg] = useState("")

const fetchBook = async ()=>{
    const response = await fetch(`${BASE_URL}/authors/author/${id}`);
     const data = await response.json();
     setAuthor(data);
    }

useEffect(()=>{
       fetchBook()
},[id])


const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAuthor(prevState => ({
     ...prevState,
      [name]: value,
    }));
  };


const handleSubmit = async (event) => {

    event.preventDefault();

    const updatedAuthor = {
        authorName: author.authorName,
        image : author.image,
        description : author.description,
        booksWritten : author.booksWritten
    };

    const response = await fetch(`${BASE_URL}/authors/author/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAuthor),
      });
    
      if (response.ok) {
        setresponseMsg("Author updated successfully")

      } else {
        setresponseMsg('Failed to update author')
      }

}


  return (
    <main className='update-book-sec bg-dark w-100'>
    <div className="container">
        <form className="form " onSubmit={handleSubmit}>
           <div className="row  mt-3">
           <div className="col-4">
               <label htmlFor="authorName" className="form-label">Author Name</label>
               <input type="text" className="form-control" placeholder='Enter the Author name' name="authorName" value={author? (author.authorName) : ''} onChange={handleInputChange}/>
           </div>
           <div className="col-4">
               <label htmlFor="image" className="form-label">Image</label>
               <input type="text" className="form-control" placeholder='Enter the url of image or image link' name="image" value={author? (author.image) : ''} onChange={handleInputChange}/>
           </div>
           </div>
           
           <div className="row g-3 mt-3">
           <div className="col-lg-12">
               <label htmlFor="booksWritten" className="form-label">Books Written</label>
               <textarea  col={5} rows={3} id="booksWritten" className="form-control" placeholder='Enter the books name written by author' name="booksWritten" value={author? (author.booksWritten) : ''} onChange={handleInputChange}></textarea>
           </div>
           <div className="col-lg-12">
               <label htmlFor="description" className="form-label">Description</label>
               <textarea  col={10} rows={8} id="description" className="form-control" placeholder='Enter the description of author' name="description" value={author? (author.description) : ''} onChange={handleInputChange}></textarea>
           </div>
           </div>
           <button type={'submit'} data-bs-toggle="modal" data-bs-target="#exampleModal">Update Author</button>

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

export default UpdateAuthor