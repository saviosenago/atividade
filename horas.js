const number = document.getElementById('num')
const element = document.getElementById('resposta')

function fore(){
    const valor = parseInt(number.value);
    let calculo =  valor*60*60
    element.innerHTML = calculo
}