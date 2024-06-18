import React, { useEffect, useState } from 'react'
import {  Link, useLoaderData } from 'react-router-dom'
import Author from '../components/author';
import BASE_URL from '../api';




export async function loader() {
  const authorResponse = await fetch(`${BASE_URL}/authors`);
  const authors = await authorResponse.json();
  return { authors };
}

function Authors() {

  const initialAuthors = useLoaderData().authors;
  const [authors, setAuthors] = useState(initialAuthors);


  useEffect(() => {
    setAuthors(initialAuthors);
  }, [initialAuthors]);


  const handleDeleteAuthor = (authorId) => {
    setAuthors(authors.filter(author => author._id!== authorId));
  };

console.log(authors)

  return (
    <main className='author-sec bg-dark w-100 p-4'>
      <div className="container">
      <div className="row">
            <Link to={"/authors/addAuthor"} className='addAuthor-btn'><i className="bi bi-person-plus"></i>Add Author</Link>
        </div>
        <div className="row">
           {
            authors.map((author)=>{
              return (
                <Author key={author._id} author={author} onDelete={handleDeleteAuthor}/>
              )
            })
           }
        </div>
      </div>
    </main>
  )
}

export default Authors