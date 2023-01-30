const lightMode = sessionStorage.getItem("lightMode")
  ? sessionStorage.getItem("lightMode")
  : null;

const toggleSwitch = document.querySelector(
  '.mode-switch input[type="checkbox"]'
);

function switchMode(e) {
  if (e.target.checked) {
    document.body.classList.add("lightmode");
    sessionStorage.setItem("lightMode", "enabled");
  } else {
    document.body.classList.remove("lightmode");
    sessionStorage.removeItem("lightMode");
  }
}

toggleSwitch.addEventListener("change", switchMode, false);

if (lightMode) {
  document.body.classList.add("lightmode");

  if (lightMode === "enabled") {
    toggleSwitch.checked = true;
  }
}
