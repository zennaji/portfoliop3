// elementen selecteren
const body = document.querySelector("body");
const btn = document.querySelector(".dark-btn");
const h2list = document.querySelectorAll("h2");
const txt = document.querySelectorAll(".txt ");
let dark = false;

// text light changer
function lighTxt(event) {
  if (dark) {
    dark = false;
    btn.textContent = "dark";
  } else {
    dark = true;
    btn.textContent = "Light";
  }
}
// dark mode aan zetten
const darkMode = function () {
  body.classList.toggle("body-dark");
  body.classList.toggle("body-light");
  for (let i = 0; i < h2list.length; i++) {
    h2list[i].classList.toggle("clrfnt");
  }

  for (let i = 0; i < txt.length; i++) {
    txt[i].classList.toggle("txt2");
  }
};
btn.addEventListener("click", darkMode);
btn.addEventListener("click", lighTxt);

// timer
const autoDark = function () {
  const date = new Date();
  console.log(date);
  if (date.getHours() > 18 && date.getHours() < 08) {
    if (dark === false) {
      darkMode();
      lighTxt();
    }
  } else {
    if (dark === true) {
      DarkMode();
      lightxt();
    }
  }
};
setInterval(autoDark, 1000);
