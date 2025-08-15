


const btn = document.querySelector("generator");
btn.addEventListener("click", () => {
  btn.textContent = "¡¡ME HICISTE CLIC!! ❤️";
  setTimeout(() => {
    btn.textContent = "Hai ku generator";
  }, 1000);
});

