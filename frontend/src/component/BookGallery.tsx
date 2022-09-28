import {Book} from "../model/Book";
import BookCard from "./BookCard";

type BookGalleryProps = {
    books: Book[];
    deleteBook: (isbn: string) => void;
}

export default function BookGallery(props: BookGalleryProps) {

    return (
        <div>
            {props.books.map((book) =>
                <BookCard book={book} deleteBook={props.deleteBook}/>)}
        </div>
    )
}