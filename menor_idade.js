function verificarIdade() {
    var idade = parseInt(document.getElementById("idade").value);
  
    if (isNaN(idade)) {
      document.getElementById("resultado").textContent = "Por favor, digite uma idade válida.";
      return;
    }
  
    if (idade < 18) {
      document.getElementById("resultado").textContent = "Menor de idade";
    } else {
      document.getElementById("resultado").textContent = "Maior de idade";
    }
  }
  