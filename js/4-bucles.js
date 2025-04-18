let renglon = 1;

while (renglon <= 50){
    document.writeln(`<p>Hola, soy un renglon ${renglon}</p>`);
    renglon++; 
}

let linea = 1;

do{
    document.writeln(`<p>Hola, soy un renglon ${linea}</p>`);
    linea++;
} while (linea <= 10);


for (let contador = 10; contador > 0; contador--){
document.writeln(`<p>${contador}</p>`);
}