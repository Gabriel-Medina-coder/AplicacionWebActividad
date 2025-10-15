let btnSumar = document.getElementById("Sumar");

function realizarSuma() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let MostrarResultadoFinal = document.getElementById("resultado");

    let resultadoSuma = numero1 + numero2;

    MostrarResultadoFinal.innerText = "El resultado es: " + resultadoSuma;
}
function realizarResta() {}
function realizarMultiplicacion() {}
function realizarDivision() {}

btnSumar.addEventListener("click", realizarSuma)
btnRestar = document.getElementById("click", realizarResta);
btnMultiplicar = document.getElementById("click", realizarMultiplicacion);
btnDividir = document.getElementById("click", realizarDivision);