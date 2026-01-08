const input = document.getElementById("input");
const button = document.querySelectorAll("button");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
  const value = btn.dataset.value || btn.innerText;


    if (value === "AC") {
      input.value = "0";
      return;
    } 
    if(value === "DEL"){
      input.value = input.value.slice(0, -1) || "0";
      return;
    }
    if (value === "=") {
      try {
        input.value = eval(input.value);
        return;
      } catch {
        input.value = "ERROR";
        return;
      }
    }

    if (input.value === "0") {
      input.value = value;
    } else {
      input.value += value;
    }
  });
});
