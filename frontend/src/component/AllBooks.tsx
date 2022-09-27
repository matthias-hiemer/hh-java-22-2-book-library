import {Book} from "../model/Book";
import BookCard from "./BookCard";
import AddBook from "./AddBook";


type AllBookProps = {
    books: Book[];
    addBook: (newTitle:string, newAuthor:string, newIsbn:string)=>void;
}

export default function AllBooks(props: AllBookProps){
    return(
        <div className={"all-books"}>
            {props.books.map(
                (book)=>{return <BookCard book={book}/>}
            )}

        </div>
    )
}