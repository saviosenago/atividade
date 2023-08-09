
function arrOW(arr) {
    
    var novoArray = [];
  
    for (var i = 0; i < arr.length; i++) {
      var numeroDobrado = arr[i] * 2;
      novoArray.push(numeroDobrado);
    }
  
   
    return novoArray;
  }
  
  
  var numeros = [1, 2, 3, 4, 5];
  
  
  var numerosDobrados = arrOW(numeros);
  
 
  document.getElementById("originalArray").textContent = numeros.join(', ');
  document.getElementById("doubledArray").textContent = numerosDobrados.join(', ');
  