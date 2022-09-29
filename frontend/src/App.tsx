import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import BookGallery from "./component/BookGallery";
import CreateBook from "./component/CreateBook";

function App() {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = () => {
        axios.get("/api/book/")
            .then((response) => response.data)
            .then((books) => setBooks(books))
            .catch((error) => console.error(error))
    }

    const addBook = (isbn:string, title:string, author:string) => {
        axios.post("/api/book", {isbn: isbn, title: title, author: author})
            .then((response) => response.data)
            .then(getBooks)
            .catch((error) => console.error(error))
    }

    const deleteBook = (isbn: string) => {
        axios.delete("/api/book/" + isbn)
            .then(getBooks)
    }

    return (
        <div className="App">
            <header className={"App-header"}>
                <h1>Book Library</h1>
                <BookGallery books={books} deleteBook={deleteBook}/>
                <CreateBook addBook={addBook}/>
            </header>
        </div>
    )
}

export default App;
