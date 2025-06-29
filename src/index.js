import { getIceCreamsApi } from "./api/getIceCreamsApi.js";
import { makeList } from "./markUp/makeListMarkUp.js";
import { backdropOpen } from "./modals/addModalOpen.js";
import { collectModalInfo } from "./modals/modalCloseAndColect.js";
import { deleteIceCreamApi } from "./api/deleteIceCreamApi.js";
import { updateIceCreamApi } from "./api/updateIceCreamApi.js";
import { collectModalInfoEdit } from "./modals/editModalCloseAndCollect.js"

getIceCreamsApi().then((data) => {
  console.log(data);
  document.querySelector(".list").innerHTML = makeList(data);

  document.querySelector(".list").addEventListener("click", async (event) => {
    console.log("test")
  if (event.target.textContent === "Edit") {
    collectModalInfoEdit(document.querySelector(".edit-form"))
  }
});
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
// document.querySelector(".edit-button").addEventListener("click", async () => {
//   collectModalInfoEdit(document.querySelector(".edit-form"))

// });
