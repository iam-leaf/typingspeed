const kobo = document.querySelector(".kobo2");
const tombolXdialert = document.querySelector(".dimas");
const Alert = document.querySelector(".alert");

let time = 60;
let skor = 0;
let timer; //untuk membuat waktu mundur;
let TeksRandom = "";
const isiTeksRandom = [
  "lorem",
  "what",
  "is",
  "simply",
  "dummy",
  "text",
  "the",
  "printing",
  "and",
  "typesetter",
  "industry",
  "standart",
  "specimen",
  "printer",
  "when",
  "screbled",
  "only",
  "centuries",
  "remaining",
  "unchanged",
  "essentially",
  "was",
  "also",
  "pagemaker",
  "country",
  "hat",
  "blue",
  "red",
  "green",
  "yellow",
  "purple",
  "black",
  "pink",
  "orange",
  "brown",
  "glass",
  "aqua"
]

const Bstart = document.querySelector(".Bstart");
const Breset = document.querySelector(".Breset");
const teks = document.querySelector(".teks");
const display = document.querySelector(".display");
const waktu = document.querySelector(".waktu");
const score  = document.querySelector(".score");
const clickstart = document.querySelector(".clickstart");

function getWords() {
  TeksRandom = isiTeksRandom[Math.floor(Math.random()* isiTeksRandom.length)]
  teks.textContent = TeksRandom
}

function startGame() {
  time = 60;
  skor = 0;
  waktu.textContent = time;
  score.textContent = skor;
  Breset.style.display = "none";
  display.disabled = false;
  display.value = "";
  display.focus();
  getWords();

  timer = setInterval(() => {
    time--;
    waktu.textContent = time;

    if (time === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function endGame() {
  display.value = "";
  display.disabled = true;
  Breset.style.display = "inline-block";
}

display.addEventListener("input", () => {
  if (display.value.toLowerCase() === TeksRandom.toLowerCase())
    {
    skor++;
    score.textContent = skor;
    display.value = "";
    getWords();
  }
});

clickstart.addEventListener("click", () => {
  startGame();
  Bstart.style.display = "none";
});

Bstart.addEventListener("click", () => {
  startGame();
  Bstart.style.display = "none";
});

Breset.addEventListener("click", () => {
 Breset.style.display = "none";
 startGame()
});

window.addEventListener("load", () => {
  display.disabled = "true";
});

kobo.addEventListener("click", () => {
  Alert.style.display = "inline-block";
})

tombolXdialert.addEventListener("click", () => {
  Alert.style.display = "none";
});

























// anime.js
const judul = document.querySelector('.title');
const text = judul.textContent;
judul.textContent = "";

[...text].forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.opacity = 0;
  judul.appendChild(span);

  anime({
    targets: span,
    opacity: [0, 1],
    delay: i * 100,
    duration: 300,
    easing: "easeOutExpo"
  });
});
