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
let selecionado = false;
let discoSelecionado;

torre.forEach((elemento) => {
  elemento.addEventListener("click", moverDiscos);
});
function moverDiscos(event) {
  let torreSelecionada = event.currentTarget;
  
  
  let total = torreSelecionada.childElementCount;
  
  if (selecionado === false && total > 0) {
    selecionado = true;
    
    discoSelecionado = torreSelecionada.children[total - 1];
  } else if (selecionado === true) {

    torreSelecionada.appendChild(discoSelecionado);
    selecionado = false;
    
  }
}