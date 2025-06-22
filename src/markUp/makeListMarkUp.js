export const makeList = (arr) => {
  const objectChange = arr
    .map((object) => {
      const newObject = `
        <li class="ice-cream">
      <h2>${object.title}</h2>
     <p>${object.id}</p>
      <p>${object.description}</p>
      <p>${object.price}</p>
      <img src="${object.photo}" alt="${object.title}">
         <button class="delete-btn" type="button" >Deleate</button>
        <button type="button">Edit</button>
      </li>
      
        `;
      return newObject;
    })

    .join("");
  return objectChange;
};
