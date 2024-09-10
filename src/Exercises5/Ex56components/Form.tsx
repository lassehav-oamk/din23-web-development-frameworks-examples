import { useState } from 'react'

export default function Form( { saveButtonClicked } ) {

    const [firstName, setFirstName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [email, setEmail] = useState("");

    function handleFirstNameChange(event) {
        console.log(event.target.value);
        setFirstName(event.target.value);
    }

    function handleFamilyNameChange(event) {
        console.log(event.target.value);
        setFamilyName(event.target.value);
    }

    function handleEmailChange(event) {
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    function handleSaveButtonClick() {
        saveButtonClicked(firstName, familyName, email);
    }

    return (
        <div>
            <div><input type="text" onChange={ handleFirstNameChange }/> First name</div>
            <div><input type="text" onChange={ handleFamilyNameChange }/> Family name</div>
            <div><input type="text" onChange={ handleEmailChange } /> Email address</div>
            <div><button onClick={ handleSaveButtonClick }>Save</button></div>
        </div>
    )
}


