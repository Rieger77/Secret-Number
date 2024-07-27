let listaDeNumerosSorteados = [];
let limiteDeNumeroSorteado = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagem() {
  exibirTextoNaTela("h1", "Secret Number");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10:");
}

exibirMensagem();
novoJogo();

function verificarChute() {
  let chute = document.querySelector("input").value;
  console.log(chute == numeroSecreto);
  if (chute == numeroSecreto) {
    let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela(
      "p",
      `Você acertou com ${tentativa} ${palavraTentativa}!`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("p", "O número secreto é menor!");
  } else {
    exibirTextoNaTela("p", "O número secreto é maior!");
  }
  limparCampo();
  tentativa++;
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limiteDeNumeroSorteado + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == limiteDeNumeroSorteado) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function novoJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagem();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
