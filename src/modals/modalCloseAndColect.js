import { postIceCreamApi } from "../api/postIceCreamsApi";

export const collectModalInfo = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.elements.nameCollect.value;
    const discription = e.target.elements.discriptionCollect.value;
    const price = e.target.elements.priceCollect.value;
    const photo = e.target.elements.photoCollect.value;
    document.querySelector(`.hero-backdrop`).style.visibility = "hidden";
    document.querySelector(`.hero-backdrop`).style.display = "none";
    const iceCreamBlock = {
      title: name,
      description: discription,
      price: price,
      photo: photo,
    };
    postIceCreamApi(iceCreamBlock)

    e.target.elements.nameCollect.value = "";
    e.target.elements.discriptionCollect.value = "";
    e.target.elements.priceCollect.value = "";
    e.target.elements.photoCollect.value = "";
    console.log(iceCreamBlock);
  });
};
