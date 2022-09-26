import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

export default function App(){

  const [books, setAllBooks] = useState([]);

  useEffect(() => {

  }, [])

  const getAllBooks = () => {
    axios.get("/api/book")
        .then((response) => response.data)
        .then((books) => setAllBooks(books))
  }

  const addBook = (isbn: string,author:string,title:string) => {
    let newBook = {
      isbn: isbn,
      author:author,
      title: title
    }
    axios.post("/api/book", newBook)
        .then(getAllBooks)

  }
  const deleteBook = (isbn: string) => {

    axios.delete("/api/book/" + isbn)
        .then(getAllBooks) //
  }

  return (
      <div className="App">
        <header>
          <h1> Book Service</h1>

        </header>
      </div>
  );

}
