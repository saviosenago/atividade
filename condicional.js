const number = document.getElementById('num')
const element = document.getElementById('resposta')

function fore (){
    const valor = parseInt(number.value);
    if (valor % 3 == 0){
element.innerHTML = "frizz"}
if(valor % 5 == 0){
    element.innerHTML = "Buzz"}

if (valor % 5 == 0 || valor % 3 == 0){
    element.innerHTML = "frizzBUZZ"
}
else{
    element.innerHTML = valor
}

}
