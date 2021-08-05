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
    destinoDoDisco.style.border = "4px solid white";
  } else if (destinoDoDiscoelecionado === true) {
    if (
      torreSelecionada.children.length === 0 ||
      torreSelecionada.lastElementChild.clientWidth > destinoDoDisco.clientWidth
    ) {
      torreSelecionada.appendChild(destinoDoDisco);
      destinoDoDiscoelecionado = false;
      destinoDoDisco.style.border = "1px solid #B12A5B";
    } else {
      alert("Try to move another piece!");
      destinoDoDisco.style.border = "1px solid #B12A5B";
      destinoDoDiscoelecionado = false;
    }
  }
  vitoria();
}
function vitoria() {
  const torre1 = document.querySelector(".torre_1").children.length;
  const torre2 = document.querySelector(".torre_2").children.length;
  if (torre2 === 5 || torre1 === 5) {
    const obj = document.createElement("div");
    const text = document.createElement("span");
    text.innerText = "YOU WIN!!!";
    obj.classList.add("vitoria");
    obj.appendChild(text);
    container.appendChild(obj);
  }
  return false;
}

function refreshPage(){
  window.location.reload();
} 