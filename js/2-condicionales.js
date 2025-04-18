const edad = parseInt(prompt("¿Cuál es tu edad?"));
console.log(edad);
console.log(isNaN(edad));

if (!isNaN(edad)) {
  if (edad >= 18 && edad <= 75) {
    alert("Tenes que votar es obligatorio");
  } else if (edad === 16 || edad === 17 || edad >= 76) {
    alert("No es obligatorio votar, pero podes hacerlo si queres");
  } else {
    alert("No podes votar");
  }
} else {
  alert("ingresaste un numero no valido");
}
