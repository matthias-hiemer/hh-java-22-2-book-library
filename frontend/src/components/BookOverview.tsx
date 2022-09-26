import {Book} from "../model/Book";
import BookShelf from "./BookShelf";

type BookOverviewProps = {
    books: Book[];
    addBook: (newTitle: string, newAuthor: string, newIsbn: string) => void;
    deleteBook:(isbn:string)=>void;
}


export default function BookOverview(props: BookOverviewProps){
    return(
        <div className={"book-overview"}>
            <BookShelf books={props.books} addBook={props.addBook} deleteBook={props.deleteBook}/>
        </div>
    )
}
