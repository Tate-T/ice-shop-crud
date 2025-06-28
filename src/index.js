import { getIceCreamsApi } from "./api/getIceCreamsApi.js";
import { makeList } from "./markUp/makeListMarkUp.js";
import { backdropOpen } from "./modals/addModalOpen.js";
import { collectModalInfo } from "./modals/modalCloseAndColect.js";
import { deleteIceCreamApi } from "./api/deleteIceCreamApi.js";
import { updateIceCreamApi } from "./api/updateIceCreamApi.js";

getIceCreamsApi().then((data) => {
  console.log(data);
  document.querySelector(".list").innerHTML = makeList(data);
});

const openModalButton = document.querySelector(".add-ice-cream");
backdropOpen(openModalButton);

collectModalInfo(document.querySelector(".form"));

// Операція видалення
document.querySelector(".list").addEventListener("click", async (event) => {
  if (event.target.textContent === "Deleate") {
    const item = event.target.parentElement;
    console.log(item.id);
    await deleteIceCreamApi(item.id);
    await getIceCreamsApi().then((data) => {
      console.log(data);
      document.querySelector(".list").innerHTML = makeList(data);
    });
  }
});
//операція редагування
document.querySelector(".list").addEventListener("click", async (e) => {
  if (e.target.textContent === "Edit") {
    console.log(e.target.parentElement.id);
    await updateIceCreamApi(e.target.parentElement.id);
  }
});
