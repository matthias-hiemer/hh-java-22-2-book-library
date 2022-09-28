import {Book} from "../model/Book";
import "./BookShelf.css"
import BookCard from "./BookCard";
import AddBookCard from "./addBookCard";
type BookShelfProps = {
    books: Book[];
    deleteBook:(isbn:string)=>void;
}

export default function BookShelf(props: BookShelfProps){
    return(
        <div className={"book-shelf"} id={"shelf"}>
            {props.books.map(
                (book)=>{return <BookCard book={book} deleteBook={props.deleteBook}/>}
            )}

        </div>
    )
}