import { people } from "./data.js";
import second from "./logo192.png";

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img width={50} src={getImageUrl()} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

function getImageUrl() {
  return second;
}
