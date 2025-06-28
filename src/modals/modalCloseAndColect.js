import { postIceCreamApi } from "../api/postIceCreamsApi";
import { getIceCreamsApi } from "../api/getIceCreamsApi";
import { makeList } from "../markUp/makeListMarkUp";
export const collectModalInfo = (form) => {
  form.addEventListener("submit", async (e) => {
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
    await postIceCreamApi(iceCreamBlock);
    await getIceCreamsApi().then((data) => {
      console.log(data);
      document.querySelector(".list").innerHTML = makeList(data);
    });
    e.target.elements.nameCollect.value = "";
    e.target.elements.discriptionCollect.value = "";
    e.target.elements.priceCollect.value = "";
    e.target.elements.photoCollect.value = "";
    console.log(iceCreamBlock);
  });
};
