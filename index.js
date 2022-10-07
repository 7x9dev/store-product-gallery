const items = document.querySelectorAll(".product");
items.forEach((item) => {
   item.addEventListener("click", () => {
      removeFocus();
      item.classList.add("selected");
   });
   removeFocus = () => {
      items.forEach((item) => {
         item.classList.remove("selected");
      });
   };
});
