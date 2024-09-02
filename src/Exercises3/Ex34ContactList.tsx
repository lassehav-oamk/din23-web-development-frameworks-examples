import React from 'react'
import Ex33ContactItem from './Ex33ContactItem'

export default function Ex34ContactList({ contacts }) {

    // convert the contacts array of objects into

    // array of JSX

    // const output = [
    //     <Ex33ContactItem name="Test" address="Another Test" />,
    //     <Ex33ContactItem name="Test2" address="Another Test2" />,
    //     <Ex33ContactItem name="Test3" address="Another Test3" />
    // ];

    let output = [];
    for(let i = 0; i < contacts.length; i++) {
        output.push(
            <Ex33ContactItem 
                name={ contacts[i].name } 
                address={ contacts[i].address } 
            />
        );
    }

    return (
        <div>
            { output }
        </div>
    )
}
