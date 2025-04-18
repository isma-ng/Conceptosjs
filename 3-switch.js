const opcions =  parseInt(prompt('selecccione una opcion: \n1. consultar saldo\n2. depositar dinero\n3. extraer dinero\n4. salir'));
 
let saldo = 10000;
switch (opcions) {
    case 1:
        document.writeln(`su saldo es de ${saldo}`);
        break;
    case 2:
        const depositar = Number(prompt('cuanto dinero desea depositar?'));
        saldo += depositar;
        document.writeln(`depositaste $ ${depositar}, su saldo es de $ ${saldo}`);
        break;
}
