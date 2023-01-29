let lightMode = localStorage.getItem("lightMode");

const lightModeToggle = document.querySelector("#lightmode-button");

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.removeItem("lightMode");
};

if (lightMode === "enabled") {
  enableLightMode();
}

lightModeToggle.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");

  if (lightMode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
