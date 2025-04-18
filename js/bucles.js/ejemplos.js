let saldo = 10500;
do{
    const opcions =  parseInt(prompt('selecccione una opcion: \n1. consultar saldo\n2. depositar dinero\n3. extraer dinero\n4. salir'));

    switch (opcions) {
        case 1:
            document.writeln(`su saldo es de ${saldo}`);
            console.log(`su saldo es de ${saldo}`);
            break;
    
            case 2:
            const depositar = Number(prompt('cuanto dinero desea depositar?'));
            console.log('depositaste' + depositar);
            saldo += depositar;
            document.writeln(`<br>depositaste $ ${depositar}, su saldo es de $ ${saldo}`);
            console.log(`depositaste $ ${depositar}, su saldo es de $ ${saldo}`);
            break;
    
            case 3:
            const extraer = Number(prompt('cuanto dinero desea extraer?'));
            if(extraer <= saldo){
            saldo  -= extraer;
            document.writeln(`<br>extrajiste $-${extraer}, su saldo es de $ ${saldo}`);
            console.log(`extrajiste $-${extraer}, su saldo es de $ ${saldo}`);
            } else{
                document.writeln(`<br>saldo insuficiente, su saldo es de $ ${saldo}`);
                console.log(`saldo insuficiente, su saldo es de $ ${saldo}`);
            }  
            break;
    
            case 4:
            document.writeln('<br>saliste de la app');  
            console.log('saliste de la app');
            break;
            default:
            document.writeln('<br>opcion no valida, por favor seleccione una opcion valida');
            console.log('opcion no valida, por favor seleccione una opcion valida');
    }    
}while(confirm('desea continuar?'));
