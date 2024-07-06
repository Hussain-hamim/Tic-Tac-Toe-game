import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Hussain",
    lastName: "Hamim",
    email: "hussainhamim83@gmail.com",
    address: {
      country: "Afghanistan",
      city: "Khost",
    },
  });

  function handleChanges(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  function handleSelect(e) {
    setPerson({
      ...person,
      address: { ...person.address, city: e.target.value },
    });
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
      <br />
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChanges}
        />
      </label>
      <br />
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChanges} />
      </label>
      <br />
      City:
      <select name="city" value={person.address.city} onChange={handleSelect}>
        <option value="khost">Khost</option>
        <option value="kabul">Kabul</option>
      </select>
      <br />
      <br />
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
      <p>
        Address: {person.address.city} - {person.address.country}
      </p>
    </>
  );
}
