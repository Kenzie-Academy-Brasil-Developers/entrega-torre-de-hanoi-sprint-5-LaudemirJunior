const torres = document.querySelector("#container");

for (let i = 0; i < 3; i++) {
  const torre = document.createElement("div");
  const obj = document.createElement("div");
  obj.classList.add(`torre${i}`);
  torre.appendChild(obj);
  torres.appendChild(torre);
}

const torre = document.querySelector(".torre0");
const torre1 = document.querySelector(".torre1");
const torre2 = document.querySelector(".torre2");

for (let i = 4; i >= 0; i--) {
  const disco = document.createElement("div");
  const obj = document.createElement("div");
  disco.classList.add("discos");
  obj.classList.add(`disco${i}`);
  obj.style.width = i * 40 + 100 + "px";
  disco.appendChild(obj);
  torre.appendChild(disco);
}

torre.addEventListener("click", mover);
torre1.addEventListener("click", mover);
torre2.addEventListener("click", mover);

const click = () => {};

function mover(evt) {
  if (
    evt.target.className === "disco0" ||
    evt.target.className === "disco1" ||
    evt.target.className === "disco2" ||
    evt.target.className === "disco3" ||
    evt.target.className === "disco4" ||
    evt.target.className === "torre0" ||
    evt.target.className === "torre1" ||
    evt.target.className === "torre2"
  ) {
    console.log(evt.target);
    torre1.appendChild("disco0");
  }
}
