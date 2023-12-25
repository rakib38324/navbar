document.addEventListener("DOMContentLoaded", function () {
   const menuBtn = document.getElementById("menuBtn");
   const navList = document.getElementById("navList");

   menuBtn.addEventListener("click", function () {
       navList.classList.toggle("show");
   });
});
