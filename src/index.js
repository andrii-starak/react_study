import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  )
}

const Book = () => (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
)

const Image = () => {
  return <img src="../public/images/book-1.jpg" alt="The Woman in Me"></img>
}
const Title = () => {
  return <h2>The Woman in Me</h2>
}
const Author = () => {
  return <h4>Britney Spears</h4>
}
const root = createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
