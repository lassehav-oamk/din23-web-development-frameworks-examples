import React from 'react'

export default function Ex32ColorList({ color1, color2, color3 }) {

    // object desctructuring
    // const { color1, color2, color3 } = props;

    // const color1 = props.color1;
    // const color2 = props.color2;
    // const color3 = props.color3;


    return (
        <ul>
            <li>{ color1 }</li>
            <li>{ color2 } </li>
            <li>{ color3 } </li>
        </ul>
    )
}
