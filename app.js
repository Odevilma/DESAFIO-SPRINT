let sinal = prompt("Qual a cor do semáforo");

switch (sinal) {
  case "verde":
    alert("Pode atravessar");
    break;
  case "amarelo":
    alert("Atenção");
    break;
  case "vermelho":
    alert("Espere");
    break;
  default:
    alert("Insira uma resposta inválida");
}
