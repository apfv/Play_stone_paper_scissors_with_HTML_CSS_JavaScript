"use strict";

let number = Math.trunc(Math.random() * 3) + 1;

let pc;

let you;

//
let ro = false;
let pa = false;
let sc = false;

function num() {
  document.querySelector(".question").classList.add("hid");

  number = Math.trunc(Math.random() * 3) + 1;

  if (number === 1) {
    pc = "rock";
  } else if (number === 2) {
    pc = "paper";
  } else if (number === 3) {
    pc = "scissor";
  }

  console.log(pc);

  if (ro === true) {
    document.querySelector(".pc-rock").classList.add("hid");
  }

  if (pa === true) {
    document.querySelector(".pc-paper").classList.add("hid");
  }

  if (sc === true) {
    document.querySelector(".pc-scissor").classList.add("hid");
  }
}

function resalet() {
  num();

  if (pc === "rock" && you === "rock") {
    let p = Number(document.querySelector(".pc-score").textContent);
    let y = Number(document.querySelector(".your-score").textContent);
    p += 0.5;
    y += 0.5;
    document.querySelector(".pc-score").textContent = `${p}`;
    document.querySelector(".your-score").textContent = `${y}`;

    // pc
    document.querySelector(".pc-rock").classList.remove("hid");
    ro = true;
  } else if (pc === "paper" && you === "paper") {
    let p = Number(document.querySelector(".pc-score").textContent);
    let y = Number(document.querySelector(".your-score").textContent);
    p += 0.5;
    y += 0.5;
    document.querySelector(".pc-score").textContent = `${p}`;
    document.querySelector(".your-score").textContent = `${y}`;

    // pc
    document.querySelector(".pc-paper").classList.remove("hid");
    pa = true;
  } else if (pc === "scissor" && you === "scissor") {
    let p = Number(document.querySelector(".pc-score").textContent);
    let y = Number(document.querySelector(".your-score").textContent);
    p += 0.5;
    y += 0.5;
    document.querySelector(".pc-score").textContent = `${p}`;
    document.querySelector(".your-score").textContent = `${y}`;

    // pc
    document.querySelector(".pc-scissor").classList.remove("hid");
    sc = true;
  } else if (pc === "scissor" && you === "rock") {
    let y = Number(document.querySelector(".your-score").textContent);
    y += 1;
    document.querySelector(".your-score").textContent = `${y}`;

    // pc
    document.querySelector(".pc-scissor").classList.remove("hid");
    sc = true;
  } else if (pc === "scissor" && you === "paper") {
    let p = Number(document.querySelector(".pc-score").textContent);
    p += 1;
    document.querySelector(".pc-score").textContent = `${p}`;

    // pc
    document.querySelector(".pc-scissor").classList.remove("hid");
    sc = true;
  } else if (pc === "rock" && you === "scissor") {
    let p = Number(document.querySelector(".pc-score").textContent);
    p += 1;
    document.querySelector(".pc-score").textContent = `${p}`;

    // pc
    document.querySelector(".pc-rock").classList.remove("hid");
    ro = true;
  } else if (pc === "rock" && you === "paper") {
    let y = Number(document.querySelector(".your-score").textContent);
    y += 1;
    document.querySelector(".your-score").textContent = `${y}`;

    // pc
    document.querySelector(".pc-rock").classList.remove("hid");
    ro = true;
  } else if (pc === "paper" && you === "scissor") {
    let y = Number(document.querySelector(".your-score").textContent);
    y += 1;
    document.querySelector(".your-score").textContent = `${y}`;

    // pc
    document.querySelector(".pc-paper").classList.remove("hid");
    pa = true;
  } else if (pc === "paper" && you === "rock") {
    let p = Number(document.querySelector(".pc-score").textContent);
    p += 1;
    document.querySelector(".pc-score").textContent = `${p}`;

    // pc
    document.querySelector(".pc-paper").classList.remove("hid");
    pa = true;
  }
}

document.querySelector(".your-rock").addEventListener("click", function () {
  you = "rock";

  console.log("rock");

  resalet();
});

document.querySelector(".your-paper").addEventListener("click", function () {
  you = "paper";

  console.log("paper");

  resalet();
});

document.querySelector(".your-scissor").addEventListener("click", function () {
  you = "scissor";

  console.log("scissor");

  resalet();
});

document.querySelector(".again").addEventListener("click", function () {
  if (ro === true) {
    document.querySelector(".pc-rock").classList.add("hid");
  }

  if (pa === true) {
    document.querySelector(".pc-paper").classList.add("hid");
  }

  if (sc === true) {
    document.querySelector(".pc-scissor").classList.add("hid");
  }

  document.querySelector(".question").classList.remove("hid");

  let p = Number(document.querySelector(".pc-score").textContent);
  let y = Number(document.querySelector(".pc-score").textContent);
  p = 0;
  y = 0;
  document.querySelector(".pc-score").textContent = `${p}`;
  document.querySelector(".your-score").textContent = `${y}`;

  ro = false;
  pa = false;
  sc = false;
});
