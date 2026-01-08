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
const currancy = document.querySelector('.currancy');
currancy.addEventListener('click',()=>{
  main.innerHTML =`
  <nav>
        <i class="fa-solid fa-arrow-left"></i>
        <p>Online Currency Converter</p>
    </nav>
     <div class="screen">
        <form>
            <select  id="from">
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
            <input type="number" id="input-from" class="input" placeholder="Enter Your Amount">
        </form>
                <form>
            <select  id="from">
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
            <p id="result">00000</p>
        </form>
    </div>
        <div class="buttns">
      <button class="butns">7</button>
       <button class="butns">8</button>
        <button class="butns">9</button>
    </div>
       <div class="buttns">
      <button class="butns">4</button>
       <button class="butns">5</button>
        <button class="butns">6</button>
    </div>
       <div class="buttns">
      <button class="butns">1</button>
       <button class="butns">2</button>
        <button class="butns">3</button>
    </div>
       <div class="buttns">
       <button class="butns">0</button>
        <button class="butns">.</button>
               <button class="butns DEL"><i class="fa-solid fa-delete-left"></i></button>
    </div>
  `
  const back = document.querySelector('.fa-arrow-left').addEventListener('click',()=>{
    window.location="../Calculator/index.html"
  })
})