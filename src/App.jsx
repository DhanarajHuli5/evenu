import { useState } from 'react'
import bookCover from './assets/images/evenu.png'
import bookCover2 from './assets/images/even2.png'
import bookCover3 from './assets/images/evenu3.png'

// Book data
const books = [
  {
    id: 1,
    title: "e-venu shikshana vani",
    author: "BEO Belagavi city",
    coverImage: bookCover,
    link: "https://online.fliphtml5.com/rkoqv/eusn/",
    month: <strong>October 2024</strong>
  },
  {
    id: 2,
    title: "e-venu shikshana vani", // copied title
    author: "BEO Belagavi city", // copied author
    coverImage: bookCover2,
    link: "https://online.fliphtml5.com/ixhkha/qtag/#p=1",
    month: <strong>November 2024</strong>,
    isPlaceholder: true
  },
  {
    id: 3,
    title: "e-venu shikshana vani",
    author: "BEO Belagavi city",
    coverImage: bookCover3,
    link: "https://online.fliphtml5.com/ixhkha/tini/",
    month: <strong>December 2024</strong>
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-primary py-4">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-white">Monthly Magazine</h1>
          <p className="text-gray-300 mt-2">Click on the book to start reading</p>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col justify-center">
        <div className="w-full h-full px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {books.map((book) => (
              <a
                key={book.id}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group w-full max-w-sm"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full">
                  <div className="relative h-[70vh]">
                    {book.coverImage ? (
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <div className="text-center p-6">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h3>
                          <p className="text-gray-600">{book.author}</p>
                        </div>
                      </div>
                    )}
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
        </div>
      </main>

      <footer className="bg-secondary py-4">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p> 2024 Monthly Magazine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
