import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import BookOverview from "./Components/BookOverview";
import PostComponent from "./Components/PostComponent";
import {Book} from "./Components/Book";


function App() {
    const [Books, setBooks] = useState([]);

    useEffect(
        () => {
            getBooks();
        }, []
    )

    const getBooks = () => {
        axios.get("api/book/")
            .then((response) => response.data)
            .then((data) => setBooks(data))
    }

    const postNewBook = (bookToPost: Book) => {
        axios.post("api/book/", bookToPost)
            .then(getBooks)
    }

    const deleteBook = (bookToDelete: string) => {
        axios.delete("api/book/" + bookToDelete)
            .then(getBooks)
    }

    return (
        <div className="App">
            <h1>Book Libary</h1>
            <PostComponent bookToAdd={postNewBook}/>
            <hr/>
            <BookOverview books={Books} deleteBooks={deleteBook}/>
        </div>
    );
}

export default App;
