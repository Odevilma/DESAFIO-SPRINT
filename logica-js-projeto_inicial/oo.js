alert("Boas vindas ao nosso site!");
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";

let nome = prompt("Digite seu nome");
let idade = prompt("Digite a sua idade");

if (nome === "" || idade === "") {
  alert(mensagemDeErro);
} else {
  if (idade >= 18) {
    alert("Pode usar habilitação");
  } else {
    alert("Não pode usar habilitação");
  }
}
