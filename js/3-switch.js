const opcions =  parseInt(prompt('selecccione una opcion: \n1. consultar saldo\n2. depositar dinero\n3. extraer dinero\n4. salir'));
 
let saldo = 10500;
switch (opcions) {
    case 1:
        document.writeln(`su saldo es de ${saldo}`);
        break;

        case 2:
        const depositar = Number(prompt('cuanto dinero desea depositar?'));
        saldo += depositar;
        document.writeln(`depositaste $ ${depositar}, su saldo es de $ ${saldo}`);
        break;

        case 3:
        const extraer = Number(prompt('cuanto dinero desea extraer?'));
        if(extraer <= saldo){
        saldo  -= extraer;
        document.writeln(`extrajiste $-${extraer}, su saldo es de $ ${saldo}`);
        } else{
            document.writeln(`saldo insuficiente, su saldo es de $ ${saldo}`);
        }  
        break;

        case 4:
        document.writeln('saliste de la app');  
        break;
        default:
        document.writeln('opcion no valida, por favor seleccione una opcion valida');
}
