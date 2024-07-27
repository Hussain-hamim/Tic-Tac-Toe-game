import { useFormInput } from "./useFormInput";

export default function Form() {
  const firstNameProps = useFormInput("Hussain");
  const lastNameProps = useFormInput("Hamim");

  /** Custom Hooks let you share stateful logic but not state
   *  itself. Each call to a Hook is completely independent
   * from every other call to the same Hook.  */

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
