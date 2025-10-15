let btnEnviar = document.getElementById("btnEnviar");

function Enviar() {
    let nombre = document.getElementById("Nombre").value;
    let apellidoP = document.getElementById("ApellidoP").value;
    let apellidoM = document.getElementById("ApellidoM").value;
    let fechaNacimiento = document.getElementById("Birthday").value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let terminos = document.getElementById("terminos").checked;
    let mensaje = document.getElementById("mensaje");

    
        if (nombre === "" || apellidoP === "" || apellidoM === "" || fechaNacimiento === "" || !terminos || !genero) {
        mensaje.innerHTML = "<p>Por favor, complete todos los campos</p>";
        }else{
        mensaje.innerHTML = "<p>Registro exitoso</p>";
        }
    
}

btnEnviar.addEventListener("click", Enviar);