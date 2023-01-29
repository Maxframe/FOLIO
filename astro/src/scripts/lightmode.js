let lightMode = sessionStorage.getItem("lightMode");

const lightModeToggle = document.querySelector("#lightmode-button");

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  sessionStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  sessionStorage.removeItem("lightMode");
};

if (lightMode === "enabled") {
  enableLightMode();
}

lightModeToggle.addEventListener("click", () => {
  lightMode = sessionStorage.getItem("lightMode");

  if (lightMode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
