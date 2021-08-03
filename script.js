const torres = document.querySelector("#container");

for (let i = 0; i < 3; i++) {
  const torre = document.createElement("div");
  const obj = document.createElement("div");
  obj.classList.add("torre");

  torre.appendChild(obj);

  torres.appendChild(torre);
}

const discos = document.querySelector(".torre");

for (let i = 2; i >= 0; i--) {
  const disco = document.createElement("div");
  const obj = document.createElement("div");
  obj.classList.add("disco");
  obj.style.width = i * 80 + 80 + "px";

  disco.appendChild(obj);

  discos.appendChild(disco);
}

const peca = document.querySelector(".torre");

peca.addEventListener("click", mover);

function mover(evt) {
  if (evt.target.className === "disco") {
    console.log(evt.target);
  }
}
