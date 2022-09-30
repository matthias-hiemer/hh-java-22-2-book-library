import React from 'react';
import logo from './library.png';
import './App.css';
import BookOverview from "./components/BookOverview";
import CreateBook from "./components/CreateBook";
import useBooks from "./hooks/useBooks";


export default function App() {

  const {books, addBook, deleteBook} = useBooks()

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
