import { getIceCreamsApi } from "./api/getIceCreamsApi.js";
import { makeList } from "./markUp/makeListMarkUp.js";





  getIceCreamsApi().then(
    (data) =>{
        console.log(data);
      document.querySelector("ul").innerHTML = makeList(data);
    }
  );
