
let btnEnviar = document.getElementById("btnEnviar");

function comprobardatos() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let MostrarResultado = document.getElementById("MostrarResultado");

    if (username === "" || password === "") {
        MostrarResultado.innerHTML = "<p>Por favor, complete todos los campos.</p>";
    } else {
        MostrarResultado.innerHTML = "<p>Datos enviados correctamente.</p>";
    }
}btnEnviar.addEventListener("click", comprobardatos);
