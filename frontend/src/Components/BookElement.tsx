import {Book} from "./Book";
import "./BookElement.css"

type BookElementProps = {
    Book: Book
    deleteBook: (isbn: string) => void
}

export default function BookElement(props:BookElementProps) {
    return(
        <div className={"singleBook"}>
            <p>Title: {props.Book.title}</p>
            <p>Author: {props.Book.author}</p>
            <p>ISBN: {props.Book.isbn}</p>
            <button onClick={() => props.deleteBook(props.Book.isbn)}>Delete</button>
        </div>
    )
}