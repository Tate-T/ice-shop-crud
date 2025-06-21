import { getIceCreamsApi } from "./api/getIceCreamsApi.js";
import { makeList } from "./markUp/makeListMarkUp.js";
import { backdropOpen } from "./modals/addModalOpen.js";
import { collectModalInfo } from "./modals/modalCloseAndColect.js";

  getIceCreamsApi().then(
    (data) =>{
        console.log(data);
      document.querySelector(".list").innerHTML = makeList(data);
    }
  );

  
const openModalButton = document.querySelector(".add-ice-cream")
backdropOpen(openModalButton)


collectModalInfo(document.querySelector(".form"))
getIceCreamsApi().then(
    (data) =>{
        console.log(data);
      document.querySelector(".list").innerHTML = makeList(data);
    }
  );
