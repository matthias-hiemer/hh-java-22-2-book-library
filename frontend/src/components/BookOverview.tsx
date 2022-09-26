import {Book} from "../model/Book";
import BookShelf from "./BookShelf";

type BookOverviewProps = {
    books:Book[];
}


export default function BookOverview(props: BookOverviewProps){
    return(
        <div className={"book-overview"}>
            <BookShelf books={props.books}/>
        </div>
    )
}
