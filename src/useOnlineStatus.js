// import { useSyncExternalStore } from "react";

// function subscribe(callback) {
//   window.addEventListener("online", callback);
//   window.addEventListener("offline", callback);
//   return () => {
//     window.removeEventListener("online", callback);
//     window.removeEventListener("offline", callback);
//   };
// }

// export function useOnlineStatus() {
//   return useSyncExternalStore(
//     subscribe,
//     () => navigator.onLine, // How to get the value on the client
//     () => true // How to get the value on the server
//   );
// }

import { use, useState } from "react"; // Not available yet!

/** We’re still working out the details,
 * but we expect that in the future,
 *  you’ll write data fetching like this:  */

function ShippingForm({ country }) {
  const cities = use(fetch(`/api/cities?country=${country}`));
  const [city, setCity] = useState(null);
  const areas = city ? use(fetch(`/api/areas?city=${city}`)) : null;
  // ...
}
