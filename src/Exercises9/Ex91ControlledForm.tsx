import React from 'react'
import { useState } from 'react'

/*
Create a controlled form that collects user information, including name, email,
and password. Display the entered information in real-time as the user types. 
*/

export default function Ex91ControlledForm() {
  const [firstName, setFirstName] = useState<string>("Hello World");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  return (
    <div>
      <h1>Ex91 Controlled Form</h1>
      <form>
        <div>
          <input type="text" value={firstName} placeholder="First Name" onChange={ handleFirstNameChange }/>
        </div>
        <div>
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}
