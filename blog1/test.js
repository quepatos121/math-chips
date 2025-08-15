


var btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "¡¡ME HICISTE CLIC!! ❤️";
  setTimeout(() => {
    btn.textContent = "Hai ku generator";
  }, 1000);
});