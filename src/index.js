import React from 'react'
import { createRoot } from 'react-dom/client'

const BookList = () => {
  return (
    <section>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  )
}

const Book = () => (
  <article>
    <Image />
    <Title />
    <Author />
  </article>
)

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/61BWsc9eGbL._AC_UL600_SR600,400_.jpg"
      alt="The Woman in Me"
    ></img>
  )
}
const Title = () => {
  return <h2>The Woman in Me</h2>
}
const Author = () => {
  return <h4>Britney Spears</h4>
}
const root = createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
