

import {Book} from "../model/Book";

type BookCardProps = {
    book : Book;
}

export default function BookCard(props : BookCardProps){

    return (
        <div className={"cards"}>
            <div className={"book-card"}>
                <h3>{props.book.title}</h3>
                <p>{props.book.author}</p>
            </div>
        </div>

    )
}