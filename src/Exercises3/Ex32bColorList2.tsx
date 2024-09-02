import React from 'react'

export default function Ex32bColorList2({ colors }) {
    // the input via props
    // const colors = ['blue', 'red', 'white'];

    // converted array into jsx
    //const output = [<li>blue</li>, <li>red</li>, <li>white</li>];

    let output = [];
    for(let i = 0; i < colors.length; i++)
    {
        output.push(<li>{colors[i]}</li>);
    }

    return (
        <ul>
            { output }
        </ul>
    )
}
