import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <>
      <h1 style={{ alignContent: 'center', textJustify: 'center' }}>
        amazon best sellers
      </h1>
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
