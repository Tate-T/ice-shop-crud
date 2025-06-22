export const deleteIceCreamApi = (id) => {
  return fetch(`http://localhost:3000/iceCreams/${id}`, {
    method: "DELETE",
  });
};
