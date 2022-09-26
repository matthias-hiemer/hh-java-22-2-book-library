import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BookOverview from "./components/BookOverview";
import axios from "axios";
import AddBookCard from "./components/AddBookCard";



function App() {
    const [books, setBooks] = useState([]);

    useEffect(()=>{getAllBooks()}, [])
    const getAllBooks = ()=>{
        axios.get("/api/book")
            .then((response)=>{return response.data})
            .then((books)=> {setBooks(books)})
            .catch((error)=>{console.error(error)})
    }
    const addBook=(newTitle:string, newAuthor:string, newIsbn:string)=> {
        let newBook = {
            title:newTitle,
            author:newAuthor,
            isbn:newIsbn
        }
        axios.put("/api/book/"+newIsbn, newBook)
            .then(getAllBooks)
    }

    const deleteBook=(isbn:string)=>{
        axios.delete("/api/book/"+isbn)
            .then(getAllBooks)
    }



  return (
    <div className="App">
      <header className="App-header">
          <h1>Book Library</h1>
          <div>
              <BookOverview books={books} addBook={addBook} deleteBook={deleteBook}/>
          </div>

      </header>
    </div>
  );
}

export default App;
