let nombre=prompt("Ingresa tu nombre ");
let edad=prompt("Ingresa tu edad: ");

switch (edad){
    case "18":
        alert("Tienes acceso a la disco");
        break
    case "17":
        alert("Edad insufisiente");
        break
    default:
        alert("No pudimos validar tu edad");
        break;
}