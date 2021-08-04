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
  const disco0 = document.querySelector(".disco_0").clientWidth;
  const disco1 = document.querySelector(".disco_1").clientWidth;
  const disco2 = document.querySelector(".disco_2").clientWidth;
  const disco3 = document.querySelector(".disco_3").clientWidth;
  const disco4 = document.querySelector(".disco_4").clientWidth;
  let torreSelecionada = event.currentTarget;
  let destinoDoDiscoNaTorre = torreSelecionada.childElementCount;

  if (destinoDoDiscoelecionado === false && destinoDoDiscoNaTorre > 0) {
    destinoDoDiscoelecionado = true;

    destinoDoDisco = torreSelecionada.children[destinoDoDiscoNaTorre - 1];
  } else if (destinoDoDiscoelecionado === true) {
    if (
      torre.lastElementChild.clientWidth < disco0 ||
      torre.lastElementChild.clientWidth < disco1 ||
      torre.lastElementChild.clientWidth < disco2 ||
      torre.lastElementChild.clientWidth < disco3 ||
      torre.lastElementChild.clientWidth < disco4
    ) {
      torreSelecionada.appendChild(destinoDoDisco);

      console.log(torreSelecionada.lastElementChild.clientWidth);

      destinoDoDiscoelecionado = false;
    }
  }
<<<<<<< HEAD
  

=======
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
>>>>>>> bb08bd0413c6e072fe34b260442fed61199f92c1
}
