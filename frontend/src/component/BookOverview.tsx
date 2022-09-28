import {Book} from "../model/Book";
import AddBook from "./AddBook";
import BookCard from "./BookCard";


type BookOverviewProps = {
    books: Book[];
    addBook: (newTitle: string, newAuthor: string, newIsbn: string) => void;
}

export default function BookOverview(props : BookOverviewProps){


    return (
        <div className={"book-overview"}>

            <div>
                <AddBook addBook={props.addBook}/>
            </div>
        </div>
    )

}