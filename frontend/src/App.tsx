import React, {useEffect, useState} from 'react';
import logo from './library.png';
import './App.css';
import BookOverview from "./components/BookOverview";
import CreateBook from "./components/CreateBook";
import {Book} from "./model/Book";
import axios from "axios";

function App() {

  const [books, setBooks] = useState<Book[]>([]);

  // Load all books
  // (when the page is rendered the first time)
  useEffect(() => {
    getAllBooks()
  }, [])

  const getAllBooks = () => {
    axios.get("/api/book")
        .then(response => response.data)
        .then(data => setBooks(data))
        .catch(console.error)
  }

  const addBook = (newBook: Book) => {
    return axios.post("/api/book", newBook)
        .then(response => response.data)
        .then(getAllBooks)  // reload books
        .catch(console.error)

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        My Little Library
        <BookOverview books={books} />
        <CreateBook addBook={addBook} />
      </header>
    </div>
  );
}

export default App;
