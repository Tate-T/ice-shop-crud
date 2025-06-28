export const postIceCreamApi = async (iceCream) => {
  const options = {
    method: "POST",
    body: JSON.stringify(iceCream),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    return await fetch("http://localhost:3000/iceCreams", options).then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};
