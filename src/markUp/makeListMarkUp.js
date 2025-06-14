export const  makeList = (arr) => {
  const objectChange = arr
    .map((object) => {
      const newObject = `
        <li>
      <h2>title:${object.title}</h2>
     <p>id:${object.id}</p>
      <p>description:${object.description}</p>
      <p>price:${object.price}</p>
      <img src="${object.photo}" alt="${object.title}">
      </li>
        `;
      return newObject;
    })
    .join("");
  return objectChange;
}