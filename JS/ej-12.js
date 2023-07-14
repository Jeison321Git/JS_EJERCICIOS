let nombre=prompt("Ingresa tu nombre ");
let edad=prompt("Ingresa tu edad: ");

switch (nombre){
    case "carlos":
        alert("Tiene 34 años, y vive en Nueva York");
        break
    case "juan":
        alert("Tiene 29 años, y vive en Los Angeles");
        break
    case"jhon":
        alert("Jhon tiene 3 gatos");
        break
    case "David":
        alert("Tiene 24 años, y es dueño de Google");
        break
    default:
        alert("No pudimos validar tu nombre");
        break;
}