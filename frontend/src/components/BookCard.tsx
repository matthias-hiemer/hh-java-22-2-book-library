import {Book} from "../model/Book";
import "./BookCard.css"

type BookCardProps = {
    book: Book
}

export default function BookCard(props: BookCardProps) {

    return (
        <div className={"book-card"}>
            <div className={"book-card__icon"}>
                📖
            </div>
            <div>
                <div className={"book-card__isbn"}>(ISBN: {props.book.isbn})</div>
                <div className={"book-card__title"}>{props.book.title}</div>
                <div className={"book-card__author"}>{props.book.author}</div>
            </div>
        </div>);
}
