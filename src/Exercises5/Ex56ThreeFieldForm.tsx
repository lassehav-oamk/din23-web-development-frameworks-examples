import { useState } from 'react'
import Form from './Ex56components/Form'
import SaveSuccess from './Ex56components/SaveSuccess';

export default function Ex56ThreeFieldForm() {
    const [firstName, setFirstName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [email, setEmail] = useState("");
    const [dataSaved, setDataSaved] = useState(false);

    function saveButtonClicked(firstName, familyName, email) {
        console.log('click');
        console.log(firstName, familyName, email);
        setFirstName(firstName);
        setFamilyName(familyName);
        setEmail(email);
        setDataSaved(true);
    }

    let output = <Form saveButtonClicked={saveButtonClicked}/>;

    if(dataSaved == true) {
        output = <SaveSuccess firstName={firstName} familyName={familyName} email={email}/>;
    }

    return (
        <div>
            <h1>Ex 56 Three Field Form</h1>
            { output }        
        </div>
    )
}
