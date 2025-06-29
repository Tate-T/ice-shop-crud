export const updateIceCreamApi = async (id, iceCream) => {
  const options = {
    method: "PUT",

    body: JSON.stringify(iceCream),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
    try {
    return await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      options
    ).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }

};
