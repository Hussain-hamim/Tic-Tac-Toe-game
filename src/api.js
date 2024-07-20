export async function fetchBio(person) {
  const delay = person === "Hussain" ? 2000 : 200;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("this is " + person + "'s bio.");
    }, delay);
  });
}
