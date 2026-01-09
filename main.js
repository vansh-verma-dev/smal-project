const input = document.getElementById("input");
const button = document.querySelectorAll("button");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value || btn.innerText;

    //     button AC all value clear
    if (value === "AC") {
      input.value = "0";
      return;
    }
    // Del btn last value num delete
    if (value === "DEL") {
      input.value = input.value.slice(0, -1) || "0";
      return;
    }
    // value calculation===
    if (value === "=") {
      try {
        input.value = eval(input.value);
        return;
      } catch {
        input.value = "ERROR";
        return;
      }
    }
    // input value show
    if (input.value === "0") {
      input.value = value;
    } else {
      input.value += value;
    }
  });
});
// Calculator theme change function
// Calculator theme change function
const main = document.querySelector(".main");
const mode = document.querySelector(".Mode");
const btns = document.querySelectorAll('.btn');
let darkMode = false;

mode.addEventListener("click", () => {
  if (!darkMode) {
    main.style.backgroundColor = "black";
    main.style.color = "#ffffff";
    input.style.color = "#ffffff";
    // Buttons ke liye loop
    btns.forEach(btn => {
      btn.style.backgroundColor = "#ffffffff";  // dark buttons
      btn.style.color = "#000000ff";
    });

    darkMode = true;
  } else {
    main.style.backgroundColor = "";
    main.style.color = "";
    input.style.color = "#000000ff";
    btns.forEach(btn => {
      btn.style.backgroundColor = ""; // default
      btn.style.color = "";           // default
    });

    darkMode = false;
  }
});
 
const currancy = document.querySelector('.currancy').addEventListener('click',()=>{
  window.location = "../Calculator/currency.html"
})