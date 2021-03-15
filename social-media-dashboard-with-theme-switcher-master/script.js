// mudas os background e as cores brancas
const buttonTheme = document.querySelector("#switch");
const body = document.querySelector("body");
function changeTheme(event) {
  if (event.target.checked) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
}

buttonTheme.addEventListener("change", changeTheme);
