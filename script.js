function toggleMode() {
  var theme = window.localStorage.getItem("theme");
  if (theme === "dark") {
    toLight();
  } else {
    toDark();
  }
}

function toDark() {
  document.documentElement.setAttribute("data-theme", "dark");
  window.localStorage.setItem("theme", "dark");

  var button = document.querySelector("#theme_toggle");
  button.setAttribute("class", "button-summer");
  button.children[0].setAttribute("src", "assets/summer.png");
  button.children[0].setAttribute("alt", "summer icon");
}

function toLight() {
  document.documentElement.setAttribute("data-theme", "light");
  window.localStorage.setItem("theme", "light");

  var button = document.querySelector("#theme_toggle");
  button.setAttribute("class", "button-lune");
  button.children[0].setAttribute("src", "assets/lune.png");
  button.children[0].setAttribute("alt", "lune icon");
}

window.addEventListener('load',
  function () {
    const theme = localStorage.getItem("theme")
    if (!theme && window.matchMedia("(prefers-color-scheme: dark)") || theme === "dark")
      toDark();
    else
      toLight();
  }, false);
