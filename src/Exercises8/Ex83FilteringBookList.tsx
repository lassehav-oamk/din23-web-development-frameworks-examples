import { useState } from 'react'


export default function Ex83DynamicBookList() {

    const [books, setBooks] = useState<string[]>(['Book A', 'Book C', 'Book D']);
    const [bookInputText, setBookInputText] = useState<string>("");
    const [filterString, setFilterString] = useState<string>("");

    function addNewBook () {
        // create a clone of the existing array in state
        const newBookArray = [...books];
        newBookArray.push(bookInputText);
        
        setBooks(newBookArray);
    }

    function filterBooksHandler(event) {
      console.log(event.target.value);
      setFilterString(event.target.value);
    }

    return (
        <div>
            <h1>Ex83 Dynamic Book List</h1>
            <div>
                <input type="text" placeholder='Book name' value={bookInputText} onChange={(event) => setBookInputText(event.target.value)} />
                <button onClick={ addNewBook }>Click to add book</button>
            </div>
            <div>Filter books: <input type="text" onChange={ filterBooksHandler } /></div>
            <ul>
                { books.filter(book => book.includes(filterString)).map(book => <li>{book}</li>) }
            </ul>
        </div>
    )
}
