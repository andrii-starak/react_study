import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
