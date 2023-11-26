const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

function handleTryClick(event) {
  event.preventDefault();
  const inputNumber = parseInt(document.querySelector("#inputNumber").value);

  if (inputNumber === randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

    document.querySelector(
      ".screen2 h2"
    ).innerText = `Você acertou em ${xAttempts} tentativa(s).`;
  } else {
    xAttempts++;
  }

  document.querySelector("#inputNumber").value = "";
}

btnTry.addEventListener("click", handleTryClick);

btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  screen1.classList.remove("hide");
  screen2.classList.add("hide");

  xAttempts = 1;
});
