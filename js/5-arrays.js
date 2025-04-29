//Declar un array vacio

const paises = [];
//array con datos
const comidas = ["🍔", 2.5, true, "pizza", 25];

//declaraciones de funciones
function listasComidas(titulo){
  document.writeln(`<h3>${titulo}</h3>`);
  document.writeln(`<ul>`);
  for (let i = 0; i < comidas.length; i++) {
    document.writeln(`<li>${comidas[i]}</li>`);
  }
  document.writeln(`</ul>`);
}

//mostrar el array
console.log(paises);
console.log(comidas);

//mostrar array en el html
document.writeln(paises + "<br>");
document.writeln(comidas);
document.writeln("<br>Cantidad de elementos en el array: " + comidas.length);

//i++
//i = i+1
listasComidas("Mostramos el array");

//Agregar elementos al array
comidas.unshift("🍟", "🍕");
listasComidas("agregamos elementos al principio del array");

comidas.push("🥗");
listasComidas("agregamos un elemento al final del array");

comidas.splice(3, 0, "🥐");
listasComidas("agregamos un elemento en el medio del array");

comidas.shift();
listasComidas("Borramos un elemento al principio del array");

comidas.pop();
listasComidas("Borramos un elemento al final del array");

comidas.splice(3,1)
listasComidas("Borramos un elemento en el medio del array");
// comidas.splice(3,2) //esta opcion borra dos elementos desde la posicion 3
// comidas.splice(3) //borra todo desde la posicion 3

console.log(comidas[5])
console.log(comidas[comidas.length - 1])
comidas[5] = '🍞'
listasComidas('Modificar un elemento del array');
