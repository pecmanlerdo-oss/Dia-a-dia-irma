const tabela = document.getElementById("quadro-tabela");
const celulas = tabela.querySelectorAll("tbody td");
const botaoLimpar = document.getElementById("limpar");

const salvos = JSON.parse(localStorage.getItem("quadroIrma") || "[]");

celulas.forEach((celula, index) => {
  if (salvos.includes(index)) {
    celula.classList.add("marcado");
    celula.textContent = "💖";
  }

  celula.addEventListener("click", () => {
    celula.classList.toggle("marcado");
    celula.textContent = celula.classList.contains("marcado") ? "💖" : "";
    salvar();
  });
});

function salvar() {
  const marcados = [];
  celulas.forEach((celula, index) => {
    if (celula.classList.contains("marcado")) marcados.push(index);
  });
  localStorage.setItem("quadroIrma", JSON.stringify(marcados));
}

botaoLimpar.addEventListener("click", () => {
  if (confirm("Tem certeza que quer limpar o quadro?")) {
    celulas.forEach((celula) => {
      celula.classList.remove("marcado");
      celula.textContent = "";
    });
    localStorage.removeItem("quadroIrma");
  }
});
