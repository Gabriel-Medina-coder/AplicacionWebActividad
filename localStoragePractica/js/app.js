const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".Name");
const ApellidoPaterno = document.querySelector(".ApellidoPaterno");
const ApellidoMaterno = document.querySelector(".ApellidoMaterno");
const FechaNacimiento = document.querySelector(".FechaNacimiento");
const Correo = document.querySelector(".Correo");

const nombreGuardado = localStorage.getItem('nombreValue');
const apellidoPaternoGuardado = localStorage.getItem('apellidoPaternoValue');
const apellidoMaternoGuardado = localStorage.getItem('apellidoMaternoValue');
const fechaNacimientoGuardado = localStorage.getItem('fechaNacimientoValue');
const correoGuardado = localStorage.getItem('correoValue');

if((nombreGuardado || apellidoPaternoGuardado || apellidoMaternoGuardado || fechaNacimientoGuardado || correoGuardado) != "") {
    nombre.setItemContent = `${nombreGuardado}`;
    ApellidoPaterno.setItemContent = `${apellidoPaternoGuardado}`;
    ApellidoMaterno.setItemContent = `${apellidoMaternoGuardado}`;
    FechaNacimiento.setItemContent = `${fechaNacimientoGuardado}`;
    Correo.setItemContent = `${correoGuardado}`;
}

btnGuardar.addEventListener("click", () => {
    const nombreValue = nombre.value;
    const apellidoPaternoValue = ApellidoPaterno.value;
    const apellidoMaternoValue = ApellidoMaterno.value;
    const fechaNacimientoValue = FechaNacimiento.value;
    const correoValue = Correo.value; 
    
    localStorage.setItem('nombre', nombreValue);
    localStorage.setItem('apellidoPaterno', apellidoPaternoValue);
    localStorage.setItem('apellidoMaterno', apellidoMaternoValue);
    localStorage.setItem('fechaNacimiento', fechaNacimientoValue);
    localStorage.setItem('correo', correoValue);

}); 