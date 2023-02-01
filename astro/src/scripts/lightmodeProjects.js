const lightMode = sessionStorage.getItem("lightMode")
  ? sessionStorage.getItem("lightMode")
  : null;

  if (lightMode) {
    document.body.classList.add("lightmode");
  }