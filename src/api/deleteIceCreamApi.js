export const deleteIceCreamApi = async (id) => {
  try {
  return await fetch(`http://localhost:3000/iceCreams/${id}`, {
    method: "DELETE",
  });
  } catch (error) {
console.log(error)
  }
};
