const number = document.getElementById('num')
const element = document.getElementById('resposta')

function fore(){
    const valor = parseInt(number.value);
    if (valor >=0){
     element.innerHTML = "POSITIVO"   
    }
else{
    element.innerHTML = "NEGATIVO"
}


}

