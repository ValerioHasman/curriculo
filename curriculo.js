function antesImpressao() {
  const main = document.getElementById("principal");
  const cold = document.getElementById("cold");
  const cole = document.getElementById("cole");
  cole.classList.remove("col-md-6", "col-12");
  cold.classList.remove("col-md-6", "col-12");
  main.classList.remove("container");
  main.classList.add("container-fluid");
  cole.classList.add("col-6");
  cold.classList.add("col-6");

}

function depoisImpressao() {

  const main = document.getElementById("principal");
  const cold = document.getElementById("cold");
  const cole = document.getElementById("cole");
  cole.classList.remove("col-6");
  cold.classList.remove("col-6");
  main.classList.remove("container-fluid");
  main.classList.add("container");
  cole.classList.add("col-md-6", "col-12");
  cold.classList.add("col-md-6", "col-12");

}

const tamanhoDaFonte = document.querySelector("input#tamanho");

tamanhoDaFonte.addEventListener("input", () => {
  const tamanho = Number.parseFloat(tamanhoDaFonte.value);
  document.documentElement.style.setProperty("--main", `calc(1rem * ${tamanho})`);
  document.documentElement.style.setProperty("--h1", `calc((1.075rem + 1.5vw) * ${tamanho})`);
  document.documentElement.style.setProperty("--h2", `calc((1.025rem + 0.9vw) * ${tamanho})`);
  document.documentElement.style.setProperty("--h3", `calc((1.0rem   + 0.6vw) * ${tamanho})`);
});

const campoColuna = document.querySelector("input#colunas");

campoColuna.addEventListener("input", () => {
  const coluna = Number.parseFloat(campoColuna.value);
  document.documentElement.style.setProperty("--coluna", `${coluna}`);
});
