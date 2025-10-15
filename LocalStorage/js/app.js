const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".nombre");
const saludo = document.querySelector(".Saludo");

const textoGuardado = localStorage.getItem('texto');
if(textoGuardado != ""){
    saludo.textContent = `Hola de nuevo: ${textoGuardado}`;
}

btnGuardar.addEventListener("click", () => {
    const texto = nombre.value;

    if(texto!=""){
        localStorage.setItem('texto', texto);
        saludo.textContent = `Guardado: ${texto}`;
}});