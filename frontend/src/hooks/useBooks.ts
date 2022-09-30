import {useEffect, useState} from "react";
import {Book} from "../model/Book";
import axios from "axios";


export default function useBooks() {

    // useState liefert und ein Array mit zwei Elementen zurück.
    // an der ersten Stelle (Index 0) steht der State, an der zweiten (Index 1) steht der setter für den State

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

    function deleteBook(id: string) {
        return axios.delete("/api/book/" + id)
            .then(getAllBooks)  // reload books
            .catch(console.error)
    }


    return {books, addBook, deleteBook}
}
