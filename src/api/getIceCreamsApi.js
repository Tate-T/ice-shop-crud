export const getIceCreamsApi = async () => {
  try {
   return await fetch("http://localhost:3000/iceCreams")
  .then((res) => res.json())
  } catch (error) {
    console.log(error)
  }
}