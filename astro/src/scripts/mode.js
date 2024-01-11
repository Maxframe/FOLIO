/* Switches Light/darkmode accordingly*/
let mode = sessionStorage.getItem("mode");
const modeSwitch = document.querySelectorAll(".modeswitch");

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  sessionStorage.setItem("mode", "light");
};

const enableDarkMode = () => {
  document.body.classList.remove("lightmode");
  sessionStorage.setItem("mode", "dark");
};

modeSwitch.forEach(function (e) {
  e.addEventListener("click", () => {
    mode = sessionStorage.getItem("mode");

    if (mode == "dark") {
      enableLightMode();
    } else if (mode == "light") {
      enableDarkMode();
    }
  });
});

if (mode == "light") {
  enableLightMode();
}

/* Disable Transition on oageload/refresh  */
document.addEventListener("DOMContentLoaded", function () {
  let node = document.querySelector(".no-transition");
  node.classList.remove("no-transition");
});
