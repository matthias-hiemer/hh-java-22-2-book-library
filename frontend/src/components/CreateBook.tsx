import "./BookCard.css"
import {Book} from "../model/Book";
import {useState} from "react";
import "./CreateBook.css"

type CreateBookProps = {
    addBook: (newBook: Book) => void
}

export default function CreateBook(props: CreateBookProps) {

    const [newTitle, setNewTitle] = useState<string>("");
    const [newIsbn, setNewIsbn] = useState<string>("");
    const [newAuthor, setNewAuthor] = useState<string>("");

    const onCreate = () => {

        if (!newTitle || !newIsbn || !newAuthor) {
            alert(`Please fill book title, isbn and author`)
            return
        }

        const newBook: Book = {
            title: newTitle,
            isbn: newIsbn,
            author: newAuthor
        }

        props.addBook(newBook)
    }

    return <div>
        Add new book
            <div>
                <p>New Title:</p>
                    <input type="text"
                           value={newTitle}
                           className={"create-book__input"}
                           onChange={(e) => setNewTitle(e.target.value)}
                    />

            </div>
            <div>
                <p>New Author:</p>
                <input type="text"
                       value={newAuthor}
                       className={"create-book__input"}
                       onChange={(e) => setNewAuthor(e.target.value)}
                />
            </div>
            <div>
                <p>New ISBN:</p>
                    <input type="text"
                           value={newIsbn}
                           className={"create-book__input"}
                           onChange={(e) => setNewIsbn(e.target.value)}
                    />
            </div>
            <div>
                <button onClick={onCreate}>✒️ Create</button>
            </div>

    </div>;

}
