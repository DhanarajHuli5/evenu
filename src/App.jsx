import { useState } from 'react'
import bookCover from './assets/images/schimg.png'

// Sample book data with external links
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: bookCover,
    link: "https://online.fliphtml5.com/rkoqv/owqi/",
    month: "January 2024"
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm",
    month: "February 2024"
  },
  {
    id: 3,
    title: "Frankenstein",
    author: "Mary Shelley",
    coverImage: "https://m.media-amazon.com/images/I/71eXYyXGJ0L._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.gutenberg.org/files/84/84-h/84-h.htm",
    month: "March 2024"
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Monthly Book Club</h1>
          <p className="text-gray-300 mt-2">Click on any book to start reading</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <a
              key={book.id}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
                <div className="relative">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read Now →
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
                  <p className="text-gray-600 mt-1">by {book.author}</p>
                  <p className="text-accent mt-2">{book.month}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer className="bg-secondary py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p> 2024 Monthly Book Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
