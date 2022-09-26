import {Book} from "../model/Book";
import BookShelf from "./BookShelf";
import AddBookCard from "./AddBookCard";
import "./BookOverview.css"

type BookOverviewProps = {
    books: Book[];
    addBook: (newTitle: string, newAuthor: string, newIsbn: string) => void;
    deleteBook:(isbn:string)=>void;
}


export default function BookOverview(props: BookOverviewProps){
    return(
        <div className={"book-overview"}>
            <div>
                <BookShelf books={props.books} addBook={props.addBook} deleteBook={props.deleteBook}/>
            </div>
            <div>
                <AddBookCard addBook={props.addBook}/>
            </div>
        </div>


    )
}
