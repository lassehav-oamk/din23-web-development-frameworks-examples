import { useState } from 'react'


export default function Ex82DynamicBookList() {

    const [books, setBooks] = useState<string[]>(['Book A', 'Book C', 'Book D']);
    const [bookInputText, setBookInputText] = useState<string>("");

    function addNewBook () {
        // create a clone of the existing array in state
        const newBookArray = [...books];
        newBookArray.push(bookInputText);
        
        setBooks(newBookArray);
    }

    return (
        <div>
            <h1>Ex82 Dynamic Book List</h1>
            <div>
                <input type="text" placeholder='Book name' value={bookInputText} onChange={(event) => setBookInputText(event.target.value)} />
                <button onClick={ addNewBook }>Click to add book</button>
            </div>
            <ul>
                { books.map(book => <li>{book}</li>) }
            </ul>
        </div>
    )
}
