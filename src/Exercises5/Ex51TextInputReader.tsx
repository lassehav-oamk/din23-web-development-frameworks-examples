import { useState } from 'react';

export default function Ex51TextInputReader() {

    const [textHolder, setTextHolder] = useState("");
    const [textOutput, setTextOutput] = useState("");

    function textInputChanged(event) {
        // text input value can be read from event.target.value
        setTextHolder(event.target.value);
    }

    function buttonClick() {
        console.log('Click');
        setTextOutput(textHolder);
    }

    return (
        <div>
            <h1>Text Input Reader Ex51</h1>
            <input type="text" onChange={ textInputChanged } />
            <button onClick={ buttonClick }>Read text</button>
            <h2>Text from text input shall appear below when you click the button</h2>
            <div>{ textOutput }</div>

        </div>
    )
}
