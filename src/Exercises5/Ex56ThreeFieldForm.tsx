import { useState } from 'react'
import Form from './Ex56components/Form'
import SaveSuccess from './Ex56components/SaveSuccess';

export default function Ex56ThreeFieldForm() {

    const [dataSaved, setDataSaved] = useState(false);

    function saveButtonClicked() {
        console.log('click');
        setDataSaved(true);
    }

    let output = <Form saveButtonClicked={ saveButtonClicked }/>;

    if(dataSaved == true) {
        output = <SaveSuccess firstName="A" familyName="B" email="C"/>;
    }

    return (
        <div>
            <h1>Ex 56 Three Field Form</h1>
            { output }        
        </div>
    )
}
