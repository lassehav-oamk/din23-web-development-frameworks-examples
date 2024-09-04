import { useState } from 'react'

export default function Ex52ClickCounter() {

    //let counter = 10;
    const [counter, setCounter] = useState(0);

    function clickHandler() {
        console.log('Click');
        //counter = counter + 1;
        setCounter(counter + 1);

        // Notice that the counter value has not yet been updated, it will be updated after
        // function finishes
        console.log(counter);
    }

    return (
        <div>
            <h1 style={ { backgroundColor: 'red' } }>Click Counter</h1>
            <div>You have clicked the button { counter } times</div>
            <button onClick={ clickHandler }>Click me</button>
        </div>
    )
}
