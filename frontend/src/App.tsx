import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import AddBook from "./component/AddBook";
import BookOverview from "./component/BookOverview";
import AllBooks from "./component/AllBooks";

function App() {

    const [books, setBooks] = useState([]);

    useEffect(()=>{getAllBooks()}, [])
    const getAllBooks = ()=>{
        axios.get("/api/book")
            .then((response)=>{return response.data})
            .then((books)=> {setBooks(books)})
    }

    const addBook = (newTitle:string, newAuthor:string, newIsbn:string) => {
        let newBook = {
            title:newTitle,
            author:newAuthor,
            isbn:newIsbn
    }

        axios.put("/api/book/"+newIsbn, newBook)
            .then(getAllBooks)
    }

    return (
        <div className="App">
            <header className="App-header">

                <h1>Books</h1>

                    <div>
                        <BookOverview books={books} addBook={addBook}/>
                        <AllBooks books={books} addBook={addBook}/>
                    </div>

            </header>
        </div>
    );
}


export default App;
