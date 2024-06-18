import React, { useEffect, useState } from 'react'
import {  Link, useLoaderData } from 'react-router-dom'
import Book from '../components/book';
import BASE_URL from '../api';




export async function loader() {
  const bookResponse = await fetch(`${BASE_URL}/books`);
  const books = await bookResponse.json();
  return { books };
}

function Books() {

  const initialBooks = useLoaderData().books;
  const [books, setBooks] = useState(initialBooks);


  useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter(book => book._id!== bookId));
  };

console.log(books)

  return (
    <main className='books-sec bg-dark w-100 p-4'>
      <div className="container">
        <div className="row">
            <Link to={"/books/addBook"} className='addBook-btn'><i className="bi bi-journal-plus"></i>Add Books</Link>
        </div>
        <div className="row">
           {
            books.map((book)=>{
              return (
                <Book key={book._id} book={book} onDelete={handleDeleteBook}/>
              )
            })
           }
        </div>
      </div>
    </main>
  )
}

export default Books