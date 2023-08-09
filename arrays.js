const arrays = document.getElementById("arrays_1").value;
const arrays_1 = document.getElementById("arrays_2").value;
const elmento = document.getElementById("result");

function join (){
    const arrays_novo = arrays.split(',').map(Number);
    const arrays_novo_2 = arrays_1.split(',').map(Number);

    const join = arrays_novo.concat(arrays_novo_2);
    var resultString = join.join(', ');
    elmento.innerHTML = resultString;
}