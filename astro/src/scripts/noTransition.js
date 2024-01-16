document.addEventListener("astro:page-load", () => {
  /* Disable Transition on pageload/refresh  */
  document.addEventListener("DOMContentLoaded", function () {
    let node = document.querySelector(".no-transition");
    node.classList.remove("no-transition");
  });
});
