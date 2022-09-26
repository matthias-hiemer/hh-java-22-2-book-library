import {Book} from "../model/Book";
import "./BookCard.css"

type BookCardProps = {
    book:Book;
    deleteBook:(isbn:string)=>void;
}


export default function BookCard(props: BookCardProps){

    return (
        <div className={"cards"}>
            <div className={"book-card"}>
                <h3>{props.book.title}</h3>
                <p>{props.book.author}</p>
                <button onClick={()=>props.deleteBook(props.book.isbn)}>Delete</button>
            </div>
        </div>


    )

}