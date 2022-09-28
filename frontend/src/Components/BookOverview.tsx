import {Book} from "./Book";
import BookElement from "./BookElement";
import "./BookOverview.css"

type BookOverviewProps = {
    books : Book[]
    deleteBooks: (isbn:string) => void
}

export default function BookOverview(props:BookOverviewProps) {

    return(
        <div className={"overview"}>
            {props.books.map((book) => <BookElement key={book.isbn} Book={book} deleteBook={props.deleteBooks}/>)}
        </div>

    )
}