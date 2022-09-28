
import {Book} from "../model/Book";

type BookCardProps ={
    books:Book;

}
export default function AddBookCard(props:BookCardProps){
    return(
        <div className = {"book-card"}>
          <p> ( {props.books.isbn}) {props.books.author} {props.books.title}</p>
        </div>
    )
}