import {ChangeEvent, useState} from "react";
import "./AddBookCard.css"

type AddBookCardProps={
    addBook:(newTitle:string, newAuthor:string, newIsbn:string)=>void;
}

export default function AddBookCard(props: AddBookCardProps){
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newIsbn, setNewIsbn] = useState("");

    const onTitleChange=(event:ChangeEvent<HTMLInputElement>)=> {
        setNewTitle(event.target.value)
    }

    const onAuthorChange=(event:ChangeEvent<HTMLInputElement>)=> {
        setNewAuthor(event.target.value)
    }

    const onIsbnChange=(event:ChangeEvent<HTMLInputElement>)=> {
        setNewIsbn(event.target.value)
    }

    return(
        <div className={"cards"}>
            <div className={"addbook-card"}>
                <label htmlFor={""}></label>
                <p>Title: <input onChange={onTitleChange} type={"text"} value={newTitle}/></p>
                <p>Author: <input onChange={onAuthorChange}type={"text"} value={newAuthor}/></p>
                <p>ISBN: <input onChange={onIsbnChange} type={"text"} value={newIsbn}/></p>
                <button onClick={()=>props.addBook(newTitle, newAuthor, newIsbn)}>Add a book</button>
            </div>
        </div>

    )
}