import { updateIceCreamApi } from "../api/updateIceCreamApi";
import { getIceCreamsApi } from "../api/getIceCreamsApi";
import { makeList } from "../markUp/makeListMarkUp";

export const collectModalInfoEdit = (form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    e.target.elements.nameCollectEdit.value = document.querySelector(".ice-cream-name").innerHTML
    e.target.elements.discriptionCollectEdit.value = document.querySelector(".ice-cream-desc").innerHTML
    e.target.elements.priceCollectEdit.value = document.querySelector(".ice-cream-price").innerHTML
    e.target.elements.photoCollectEdit.value = document.querySelector(".ice-cream-photo").src

    const name = e.target.elements.nameCollectEdit.value;
    const discription = e.target.elements.discriptionCollectEdit.value;
    const price = e.target.elements.priceCollectEdit.value;
    const photo = e.target.elements.photoCollectEdit.value;
    document.querySelector(`.edit-backdrop`).style.visibility = "hidden";
    document.querySelector(`.edit-backdrop`).style.display = "none";
    const iceCreamBlock = {
      title: name,
      description: discription,
      price: price,
      photo: photo,
    };
    
    await updateIceCreamApi(iceCreamBlock);
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