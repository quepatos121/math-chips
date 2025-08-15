const btn = document.querySelector(".generator");
btn.addEventListener("click", () => {
  btn.textContent = "¡¡ME HICISTE CLIC!! ❤️";
  setTimeout(() => {
    btn.textContent = "Presióname";
  }, 1000);
});