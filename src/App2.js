import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Hussain",
    lastName: "Hamim",
    email: "hussainhamim83@gmail.com",
  });

  function handleChanges(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChanges}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChanges}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChanges} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
