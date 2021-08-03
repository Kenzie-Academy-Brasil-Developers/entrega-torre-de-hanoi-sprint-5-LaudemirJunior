const container = document.querySelector("#container");
<<<<<<< HEAD

=======
>>>>>>> 6db6f4fe52cf0629d297448dd39d3d8fa2a91f9f
for (let i = 0; i < 3; i++) {
  const obj = document.createElement("div");
  obj.classList.add("torre", `torre_${i}`);
  container.appendChild(obj);
}
<<<<<<< HEAD

const t1 = document.querySelector(".torre_0");

=======
const t1 = document.querySelector(".torre_0");
>>>>>>> 6db6f4fe52cf0629d297448dd39d3d8fa2a91f9f
for (let i = 4; i >= 0; i--) {
  const obj = document.createElement("div");
  obj.classList.add("disco", `disco_${i}`);
  obj.style.width = i * 40 + 100 + "px";
  t1.appendChild(obj);
}
<<<<<<< HEAD

const torre = document.querySelectorAll(".torre");

let selecionado = false;
let discoSelecionado;

torre.forEach((elemento) => {
  elemento.addEventListener("click", moverDiscos);
});

function moverDiscos(event) {
  let torreSelecionada = event.currentTarget;
  let total = torreSelecionada.childElementCount;

=======
const torre = document.querySelectorAll(".torre");
let selecionado = false;
let discoSelecionado;
torre.forEach((elemento) => {
  elemento.addEventListener("click", moverDiscos);
});
function moverDiscos(event) {
  let torreSelecionada = event.currentTarget;
  let total = torreSelecionada.childElementCount;
>>>>>>> 6db6f4fe52cf0629d297448dd39d3d8fa2a91f9f
  if (selecionado === false && total > 0) {
    selecionado = true;
    discoSelecionado = torreSelecionada.children[total - 1];
  } else if (selecionado === true) {
    torreSelecionada.appendChild(discoSelecionado);
    selecionado = false;
  }
}