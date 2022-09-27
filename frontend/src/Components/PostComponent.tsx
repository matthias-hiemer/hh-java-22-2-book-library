import {Book} from "./Book";
import {useState} from "react";
import "./PostComponent.css"

type PostComponentProps = {
    bookToAdd: (newBook:Book) => void
}

export default function PostComponent(props: PostComponentProps) {

    const [newTitle, setNewTitle] = useState("")
    const [newAuthor, setNewAuthor] = useState("")
    const [newIsbn, setNewisbn] = useState("")

    return (
        <div className={"post"}>
            <p >Add new Book:</p>
            <input type={"text"} onChange={(i) => setNewTitle(i.target.value)} placeholder={"Title"}></input>
            <input type={"text"} onChange={(i) => setNewAuthor(i.target.value)} placeholder={"Author"}></input>
            <input type={"text"} onChange={(i) => setNewisbn(i.target.value)} placeholder={"ISBN-Number"}></input>
            <button onClick={() => props.bookToAdd({title:newTitle, author:newAuthor, isbn:newIsbn})}>Add</button>
        </div>
    )
}