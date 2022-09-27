import {Book} from "../model/Book";
import BookCard from "./BookCard";

type BookOverviewProps = {
    books: Book[]
}

export default function BookOverview(props: BookOverviewProps) {
    return <div>
        {props.books.map(
            (book) => <BookCard key={book.isbn} book={book}/>)}
    </div>
}
