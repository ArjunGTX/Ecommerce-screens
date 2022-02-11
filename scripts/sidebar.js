const sidebar = document.querySelector(".sidebar");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

openIcon.addEventListener("click", () => sidebar.classList.add("show-sidebar"));
closeIcon.addEventListener("click", () =>
    sidebar.classList.remove("show-sidebar")
);
