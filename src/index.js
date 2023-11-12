import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
]

// const author = 'Jordan Moore'
// const title = 'Interesting Facts For Curious Minds'
// const img = './images/book-1.jpg'

const names = ['john', 'peter', 'susan']
const newNames = names.map((name) => {
  return <h1>{name}</h1>
})
console.log(newNames)
const BookList = () => {
  return <section className="booklist">{names}</section>
}
const Book = (props) => {
  const { img, title, author } = props
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
