import { useState } from 'react'

export default function Ex54ParagraphToggle() {

    //const displayValue = 'none';
    const [displayValue, setDisplayValue] = useState('none');

    function toggleParagraph() {
        if(displayValue == 'none') {
            setDisplayValue('block');
        } else {
            setDisplayValue('none');
        }        
    }

    return (
        <div>
            <h1>Ex54 Text Paragraph Toggle</h1>
            <button onClick={ toggleParagraph }>Toggle text</button>
            <p style={ { display: displayValue } }>This is the text p to toggle visible and hidden</p>
        </div>
    )
}
