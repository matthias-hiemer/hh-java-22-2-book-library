import {ChangeEvent, useState} from "react";


type AddBookProps={
    addBook:(newTitle:string, newAuthor:string, newIsbn:string)=>void;
}
export default function AddBook(props: AddBookProps){

    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newIsbn, setNewIsbn] = useState("");

    const onTitleChange =(event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value)
    }
    const onAuthorChange =(event: ChangeEvent<HTMLInputElement>) => {
        setNewAuthor(event.target.value)
    }
    const onIsbnChange =(event: ChangeEvent<HTMLInputElement>) => {
        setNewIsbn(event.target.value)
    }

    return(
        <div className={"Books"}>
            <div className={"addbook-card"}>
                <div className={"add"}>Title: <input onChange={onTitleChange} type={"text"} value={newTitle} placeholder={"Title of book"}/></div>
                <div className={"add"}>Author: <input onChange={onAuthorChange}type={"text"} value={newAuthor} placeholder={"Name of author"}/></div>
                <div className={"add"}>ISBN: <input onChange={onIsbnChange} type={"text"} value={newIsbn} placeholder={"ISBN of book"}/></div>
                <div className={"btn-add"}><button onClick={()=>props.addBook(newTitle, newAuthor, newIsbn)}>Add a book</button></div>
            </div>
        </div>
    )
}
