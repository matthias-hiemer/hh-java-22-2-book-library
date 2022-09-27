
import "./BookCSS.css"
import {Book} from "../model/Book";

type BookProps = {
    book : Book;
}

export default function Book(props : BookProps){

    return (
        <div className={"cards"}>
            <div className={"book-card"}>
                <h3>{props.book.title}</h3>
                <p>{props.book.author}</p>
            </div>
        </div>

    )
}