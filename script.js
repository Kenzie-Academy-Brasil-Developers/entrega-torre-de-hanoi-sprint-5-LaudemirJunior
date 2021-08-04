const container = document.querySelector("#container");
for (let i = 0; i < 3; i++) {
  const obj = document.createElement("div");
  obj.classList.add("torre", `torre_${i}`);
  container.appendChild(obj);
}

const t1 = document.querySelector(".torre_0");

for (let i = 4; i >= 0; i--) {
  const obj = document.createElement("div");
  obj.classList.add("disco", `disco_${i}`);
  obj.style.width = i * 40 + 100 + "px";
  t1.appendChild(obj);
}

const torre = document.querySelectorAll(".torre");

let destinoDoDiscoelecionado = false;
let destinoDoDisco;

torre.forEach((elemento) => {
  elemento.addEventListener("click", moverdestinoDoDisco);
});

function moverdestinoDoDisco(event) {
  let torreSelecionada = event.currentTarget;
  let destinoDoDiscoNaTorre = torreSelecionada.childElementCount;

  if (destinoDoDiscoelecionado === false && destinoDoDiscoNaTorre > 0) {
    destinoDoDiscoelecionado = true;
    destinoDoDisco = torreSelecionada.children[destinoDoDiscoNaTorre - 1];
  } else if (destinoDoDiscoelecionado === true) {
    torreSelecionada.appendChild(destinoDoDisco);
    destinoDoDiscoelecionado = false;
  }
}
