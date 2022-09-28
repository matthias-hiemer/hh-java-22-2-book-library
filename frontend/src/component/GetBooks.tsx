import {useState} from "react";
import axios from "axios";

export default function GetBooks(){
    const [books, setBooks] = useState([])


        axios.get("/api/book/")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setBooks(data)
            })
            .catch((error) => {
                console.error(error)
            })

    return books;
}