export const postIceCreamApi = (iceCream) => {
    const options = {
    method: "POST",
    body: JSON.stringify(iceCream),
    headers: {
    "Content-Type": "application/json; charset=UTF-8",
    },
};
   return fetch("http://localhost:3000/iceCreams", options)
  .then((res) => res.json())
}