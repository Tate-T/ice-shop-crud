export const makeList = (arr) => {
  const objectChange = arr
    .map((object) => {
      const newObject = `
        <li class="ice-cream" id="${object.id}">
      <h2 class="ice-cream-name">${object.title}</h2>
     <p class="ice-cream-id">${object.id}</p>
      <p class="ice-cream-desc">${object.description}</p>
      <p class="ice-cream-price">${object.price}</p>
      <img class="ice-cream-photo" src="${object.photo}" alt="${object.title}">
         <button class="delete-btn" type="button">Deleate</button>
        <button type="button">Edit</button>
      </li>
      
        `;
      return newObject;
    })

    .join("");
  return objectChange;
};
