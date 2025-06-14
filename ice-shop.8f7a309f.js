fetch("http://localhost:3000/iceCreams").then(e=>e.json()).then(e=>{console.log(e),document.querySelector("ul").innerHTML=e.map(e=>`
        <li>
      <h2>title:${e.title}</h2>
     <p>id:${e.id}</p>
      <p>description:${e.description}</p>
      <p>price:${e.price}</p>
      <img src="${e.photo}" alt="${e.title}">
      </li>
        `).join("")});
//# sourceMappingURL=ice-shop.8f7a309f.js.map
