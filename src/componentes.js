import Swal from "sweetalert2";

 export const openMessaje = (title,text,icon) => {
  Swal.fire({
    title,
    text,
    icon,
    timer: 1500,
  });
};


 