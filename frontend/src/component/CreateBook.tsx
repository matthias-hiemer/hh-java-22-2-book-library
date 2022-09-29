import React, {useState} from "react";



type CreateBookProps = {
    addBook : (isbn:string, title:string, author:string) => void
}

export default function CreateBook(props: CreateBookProps){
    const [isbn, setIsbn] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = () => {
            props.addBook(isbn, title, author)
    }

    return(
        <div>
    <p>Add new Book</p>
    <input onChange={(event) => setIsbn(event.target.value)} placeholder={"ISBN"}/>
    <input onChange={(event) => setTitle(event.target.value)} placeholder={"Title"}/>
    <input onChange={(event) => setAuthor(event.target.value)} placeholder={"Author"}/>
    <button onClick={handleSubmit}>Add Book</button>
        </div>
)
}

