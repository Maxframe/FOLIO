/* Show/hide floating modeswitch */
const heroModeSwitch = document.querySelector(".modeswitch-wrapper");
const floatModeSwitch = document.querySelector(".floating-modeswitch-wrapper");

const options = {};

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      floatModeSwitch.classList.add("show-float");
    } else {
      floatModeSwitch.classList.remove("show-float");
    }
  });
}, options);

heroObserver.observe(heroModeSwitch);
