const input = document.getElementById("input");
const button = document.querySelectorAll("button");

button.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerHTML === "AC") {
      input.value = "";
    } else if (button.innerHTML === "=") {
      input.value = eval(input.value);
    } else {
      input.value += button.innerHTML;
    }
  });
});
