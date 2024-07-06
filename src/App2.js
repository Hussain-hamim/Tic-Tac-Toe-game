import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Hussain",
    lastName: "Hamim",
    email: "hussainhamim83@gmail.com",
  });

  function handleFirstNameChange(e) {
    // person.firstName = e.target.value;
    setPerson({ ...person, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    // person.lastName = e.target.value;
    setPerson({ ...person, firstLast: e.target.value });
  }

  function handleEmailChange(e) {
    // person.email = e.target.value;
    setPerson({ ...person, email: e.target.value });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
