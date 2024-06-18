import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../api';

function AddAuthor() {

    const [responseMsg, setresponseMsg] = useState("")

    const [authorName, setAuthorName] = useState('');
    const [image, setImage] = useState('');
    const [booksWritten, setBookWritten] = useState('');
    const [description, setDescription] = useState('');

    
    const navigate = useNavigate( )

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        switch (name) {
          case 'authorName':
            setAuthorName(value);
            break;
          case 'image':
            setImage(value);
            break;
          case 'booksWritten':
            setBookWritten(value);
            break;
          case 'description':
            setDescription(value);
            break;
          default:
            break;
        }
      };
    

const handleSubmit =async(e)=>{
  e.preventDefault()
  
  const newAuthor = {
    authorName,
    image,
    booksWritten,
    description,
  };

  try {
    const response = await fetch(`${BASE_URL}/authors/author`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAuthor),
    });

    if (!response.ok) {
     
      const errorData = await response.json();
      console.log('Backend error:', errorData);
      throw new Error(errorData.message); 
      setresponseMsg(errorData.message)
    }

   
    const addedAuthor = await response.json();
    console.log('Author added successfully:', addedAuthor);
    setresponseMsg('Author added successfully');
    setTimeout(()=>{
      navigate('/authors')
    },3000)
    
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error.message);
    setresponseMsg(error.message); 
  }

}


  return (
    <main className='update-book-sec bg-dark w-100'>
    <div className="container">
        <form className="form " onSubmit={handleSubmit}>
           <div className="row  mt-3">
           <div className="col-4">
               <label htmlFor="authorName" className="form-label">Author Name</label>
               <input type="text" className="form-control" placeholder='Enter the Author name'  name="authorName" value={authorName} onChange={handleChange}/>
           </div>
           <div className="col-4">
               <label htmlFor="authorImage" className="form-label">Image</label>
               <input type="text" className="form-control" placeholder='Enter the url of image or image link' name="image" value={image} onChange={handleChange}/>
           </div>
           </div>
           
           <div className="row g-3 mt-3">
           <div className="col-lg-12">
               <label htmlFor="booksWritten" className="form-label">Books Written</label>
               <textarea  col={5} rows={3} id="booksWritten" className="form-control" placeholder='Enter the books name written by author' name="booksWritten" value={booksWritten} onChange={handleChange}></textarea>
           </div>
           <div className="col-lg-12">
               <label htmlFor="description" className="form-label">Description</label>
               <textarea  col={10} rows={8} id="description" className="form-control" placeholder='Enter the description of author' name="description" value={description} onChange={handleChange}></textarea>
           </div>
           </div>
           <button type={'submit'}>Add Author</button>
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

export default AddAuthor