import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book-1.jpg',
}
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
}
// const author = 'Jordan Moore'
// const title = 'Interesting Facts For Curious Minds'
// const img = './images/book-1.jpg'

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      ></Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      ></Book>
    </section>
  )
}
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
