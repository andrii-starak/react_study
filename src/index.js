import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <>
      <h2 style={{ alignContent: 'center', textJustify: 'center' }}>
        Best Sellers in Books
      </h2>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
