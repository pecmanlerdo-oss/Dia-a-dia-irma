const tabela = document.getElementById("planilha");
const celulas = tabela.querySelectorAll("tbody td:not(.tarefa)");
const botaoLimpar = document.getElementById("limpar");

const salvos = JSON.parse(localStorage.getItem("planilhaIrma") || "[]");

celulas.forEach((celula, index) => {
  if (salvos.includes(index)) {
    celula.classList.add("marcado");
  }

  celula.addEventListener("click", () => {
    celula.classList.toggle("marcado");
    salvar();
  });
});

function salvar() {
  const marcados = [];
  celulas.forEach((celula, index) => {
    if (celula.classList.contains("marcado")) marcados.push(index);
  });
  localStorage.setItem("planilhaIrma", JSON.stringify(marcados));
}

botaoLimpar.addEventListener("click", () => {
  if (confirm("Tem certeza que quer limpar a planilha?")) {
    celulas.forEach((celula) => celula.classList.remove("marcado"));
    localStorage.removeItem("planilhaIrma");
  }
});
