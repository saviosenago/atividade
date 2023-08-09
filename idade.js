const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("year");
const resultadoAno = document.getElementById("year-result");
const resultadoMes = document.getElementById("mes-result");
const resultadoDia = document.getElementById("dia-result");
const botaoCalcular = document.getElementById("btn");

botaoCalcular.addEventListener("click", calcularIdade);

function calcularIdade() {
  const anoNascimento = parseInt(ano.value);
  const mesNascimento = parseInt(mes.value) - 1; 
  const diaNascimento = parseInt(dia.value);

  const dataNascimento = new Date(anoNascimento, mesNascimento, diaNascimento);
  const dataAtual = new Date();

  const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

  


  resultadoAno.innerHTML = `Idade: ${idade} anos`;
  
}
