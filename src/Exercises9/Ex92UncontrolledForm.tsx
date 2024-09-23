import { useRef } from 'react';


export default function Ex92UncontrolledForm() {

  const firstNameRef = useRef(null);

  /* Commented out for useRef example
  
  function formSubmitHandler(event) {
    event.preventDefault();
    console.log('Form submitted');

    // read the form data from the form fields
    const formData = new FormData(event.target);

    // print the form values to console one by one
    console.log('First Name:', formData.get('firstName'));
    console.log('Last Name:', formData.get('lastName'));
    console.log('Email:', formData.get('email'));
    console.log('Password:', formData.get('pwd'));
  }*/

  function formSubmitWithRefExampleHandler(event) {
    event.preventDefault();
    console.log('First Name from ref:', firstNameRef.current.value);
  }

  return (
    <div>
      <h1>Ex92 Uncontrolled Form</h1>

      <form onSubmit={formSubmitWithRefExampleHandler}>
        <div>
          <input type="text" ref={firstNameRef} name="firstName" placeholder="First Name" />
        </div>
        <div>
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" name="pwd" placeholder="Password" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}
