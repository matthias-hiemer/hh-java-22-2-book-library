import {Book} from "../model/Book";
import BookCard from "./BookCard";


type AllBookProps = {
    books: Book[];
    addBook: (newTitle:string, newAuthor:string, newIsbn:string)=>void;
    deleteBook:(isbn:string)=>void;
}

export default function AllBooks(props: AllBookProps){
    return(
        <div className={"book-shelf"} id={"shelf"}>
            {props.books.map(
                (book)=>{return <BookCard book={book}/>}
            )}

        </div>
    )
}