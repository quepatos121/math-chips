const btn = document.querySelector(".generator");
btn.addEventListener("click", () => {
  btn.textContent = "¡¡ME HICISTE CLIC!! ❤️";
  setTimeout(() => {
    btn.textContent = "Hai ku generator";
  }, 1000);
});

public class Dog {
    // Fields (attributes)
    int name;
    String breed;

    // Constructor
    public Dog(int name, String breed, int age) {
        this.name = name;
        this.breed = breed;
    }