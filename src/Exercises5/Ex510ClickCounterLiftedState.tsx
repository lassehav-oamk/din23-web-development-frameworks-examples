import { useState } from 'react'
import Ex510ButtonChild from './Ex510ButtonChild';

export default function Ex510ClickCounterLiftedState() {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(counter + 1);
    }

    function decreaseCounter() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>Ex510ClickCounterLiftedState</h1>
            <div>Counter value: {counter}</div>
            <Ex510ButtonChild onButtonClick={ incrementCounter } text="Increase"/>
            <Ex510ButtonChild onButtonClick={ decreaseCounter } text="Decrease"/>
        </div>
    )
}
