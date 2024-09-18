import React from 'react'

interface Ex81MapDemoProps {
    books: string[]
}

export default function Ex81MapDemo({ books } : Ex81MapDemoProps) {

    /*
    The output will be like this:
    <div>
        <ul>
            <li>Title</li>
            <li>Title</li>
            <li>Title</li>
            <li>Title</li>
            <li>Title</li>
            <li>Title</li>
        </ul>
    </div>
    */
  return (
    <div>
        <h1>Ex81 Map Demo</h1>
        <ul>
            { books.map(book => <li>{book}</li>) }
            { [
                <li>Title</li>,
                <li>title 2</li>,
                <li>Title 3</li>
              ]}
        </ul>
    </div>
  )
}
