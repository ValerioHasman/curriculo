// var gitSvg = '';
// var linkSvg = '';
// var abertoQR = false;
// var printAberto = false;

// const temaArmazenado = localStorage.getItem('theme');

// window.addEventListener('load',()=>{
//   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',imprimirTema);
// });

function antesImpressao() {
  // ativaQR();
  const main = document.getElementById("principal");
  const cold = document.getElementById("cold");
  const cole = document.getElementById("cole");
  cole.classList.remove("col-md-6", "col-12");
  cold.classList.remove("col-md-6", "col-12");
  main.classList.remove("container");
  main.classList.add("container-xxl");
  cole.classList.add("col-6");
  cold.classList.add("col-6");

  main.style.fontSize = '0.88rem';
  main.querySelectorAll('h2, h3').forEach((titulo)=>{
    titulo.style.fontSize = '1.11rem';
  });
  main.querySelectorAll('p, li').forEach((txt)=>{
    txt.style.lineHeight = '1.089rem';
  });
  //ativaQR();
  atualizarEstilo(true);
}

// function autolight(){
//   let ativo = document.querySelector('.active[data-bs-theme-value]');
//   let valor;

//   if(ativo){
//     let ativoCor = ativo.getAttribute('data-bs-theme-value');
//     if(ativoCor == 'light' ^ ativoCor == 'dark'){
//       valor = ativo.getAttribute('data-bs-theme-value');
//     } else if(temaArmazenado == 'light' ^ temaArmazenado == 'dark'){
//       valor = temaArmazenado;
//     } else if (window.matchMedia('(prefers-color-scheme: dark)').matches){
//       valor = 'dark';
//     } else {
//       valor = 'light';
//     }
//   } else if(temaArmazenado == 'light' ^ temaArmazenado == 'dark'){
//     valor = temaArmazenado;
//   } else if (window.matchMedia('(prefers-color-scheme: dark)').matches){
//     valor = 'dark';
//   } else {
//     valor = 'light';
//   }

//   return (printAberto ? valor : 'light')
// }

// function imprimirTema(){
//   document.documentElement.setAttribute('data-bs-theme', autolight());
//   localStorage.setItem('theme', autolight())
//   printAberto = !printAberto;
// }

function depoisImpressao() {
  // ativaQR();
  const main = document.getElementById("principal");
  const cold = document.getElementById("cold");
  const cole = document.getElementById("cole");
  cole.classList.remove("col-6");
  cold.classList.remove("col-6");
  main.classList.remove("container-xxl");
  main.classList.add("container");
  cole.classList.add("col-md-6", "col-12");
  cold.classList.add("col-md-6", "col-12");

  main.style.fontSize = '';
  main.querySelectorAll('h2, h3').forEach((titulo)=>{
    titulo.style.fontSize = '';
  });
  main.querySelectorAll('p, li').forEach((txt)=>{
    txt.style.lineHeight = '';
  });
  //ativaQR();
  atualizarEstilo();
}
// function ativaQR(){
//   let deposito = document.getElementById('depositoSVG');
//   if(abertoQR){
//     document.body.style.setProperty('--altura', 0);
//     deposito.innerHTML = '';
//     abertoQR = !abertoQR;
//   } else {
//     defineAlturaQR();
//     deposito.innerHTML = '<div class="row"><div class="col-auto">'+ gitSvg +
//                           '</div><div class="col-auto">'+ linkSvg +
//                             '</div></div>';
//     abertoQR = !abertoQR;
//   }
// }
// function defineAlturaQR(){
//   let alturaQR = document.getElementById('cabeca').clientHeight;
//   document.body.style.setProperty('--altura', `${alturaQR}px`);
// }
// fetch('https://raw.githubusercontent.com/ValerioHasman/curriculo/main/link.svg',{
//   method: 'GET',
// }).then(resp => resp.text())
// .then((data) => {
//   linkSvg = data;
// }).catch(err=>{console.log(err)})
// fetch('https://raw.githubusercontent.com/ValerioHasman/curriculo/main/git.svg',{
//   method: 'GET',
// }).then(resp => resp.text())
// .then((data) => {
//   gitSvg = data;
// }).catch(err=>{console.log(err)})

// function print2(btn){
//   imprimirTema();
//   btn.disabled = true;
//   setTimeout(()=>{
//     btn.disabled = false;
//     depoisImpressao();
//     imprimirTema();
//   }, 3500);
//   antesImpressao();
//   const item = document.getElementById('principal');

//   let ops = {
//     margin: 4,
//     filename: "Valério_Currículo.pdf",
//     html2canvas: {scale: 4},
//     jsPDF: { format: "a4", orientation: "portrait"},
//   };
//   html2pdf().set(ops).from(item).save();
// }


window.addEventListener('resize', atualizarEstilo);

atualizarEstilo();

function atualizarEstilo(tres = false) {
  const habilidades = document.getElementById('habilidades');
  const larguraDiv = habilidades.clientWidth;

  if (larguraDiv > 340 || tres ) {
    habilidades.classList.remove('colunas-2');
    habilidades.classList.add('colunas-3');
  } else {
    habilidades.classList.remove('colunas-3');
    habilidades.classList.add('colunas-2');
  }
}
