import { useState } from 'react'

export default function Ex56ThreeFieldForm() {

    const [firstName, setFirstName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [email, setEmail] = useState("");
    const [dataSaved, setDataSaved] = useState(false);

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

    function saveButtonClicked() {
        console.log('click');
        setDataSaved(true);
    }

    let output = (
        <div>
            <div><input type="text" onChange={ handleFirstNameChange }/> First name</div>
            <div><input type="text" onChange={ handleFamilyNameChange }/> Family name</div>
            <div><input type="text" onChange={ handleEmailChange } /> Email address</div>
            <div><button onClick={ saveButtonClicked }>Save</button></div>
        </div>
    );

    if(dataSaved == true) {
        output = <div>Saved { firstName } { familyName } ({email})</div>;
    }

    return (
        <div>
            <h1>Ex 56 Three Field Form</h1>
            { output }        
        </div>
    )
}
