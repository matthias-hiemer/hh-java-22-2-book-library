import {Book} from "../model/Book";
import BookShelf from "./BookRegal";
import AddBookCard from "./addBookCard";
import "./BookOverview.css"

type BookOverviewProps = {
    books: Book[]
    deleteBook:(isbn:string)=>void;
}


export default function BookOverview(props: BookOverviewProps){
    return(
        <div className={"book-overview"}>
            <div>
                <BookShelf books={props.books} deleteBook={props.deleteBook}/>
            </div>

        </div>


    )
}