
var nombreUsuario = prompt("Por favor, ingrese su nombre:");

var mensajeBienvenida = "¡Bienvenido/a, " + nombreUsuario + "! X Servicios Financieros se alegra de tenerte aquí. \nPor favor aprete Enter para continuar";

alert(mensajeBienvenida);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Cliente {
    constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    }
}

class Cuenta {
    constructor(cliente, tipoCuenta) {
    this.cliente = cliente;
    this.tipoCuenta = tipoCuenta;
    this.saldo = this.cliente.saldo;
}

    depositar(monto) {
    this.saldo += monto;
    console.log(`Se han depositado ${monto} en la cuenta de ${this.cliente.nombre}. Saldo actual: ${this.saldo}`);
    }

    retirar(monto) {
    if (monto <= this.saldo) {
        this.saldo -= monto;
        console.log(`Se han retirado ${monto} de la cuenta de ${this.cliente.nombre}. Saldo actual: ${this.saldo}`);
    } else {
        console.log(`No hay saldo suficiente en la cuenta de ${this.cliente.nombre}. Saldo actual: ${this.saldo}`);
    }
    }
}


const Deposito = () => {
    var cliente1 = new Cliente(nombreUsuario, parseFloat(prompt("Ingrese saldo")))
    var cuenta1 = new Cuenta(cliente1, "Caja de Ahorro");

    cuenta1.depositar(parseFloat(prompt("Ingrese monto a depostiar")));
}

const Retiro = () => {
    var cliente1 = new Cliente(nombreUsuario, parseFloat(prompt("Ingrese saldo")))
    var cuenta1 = new Cuenta(cliente1, "Caja de Ahorro");

    cuenta1.retirar(parseFloat(prompt("Ingrese monto a retirar")));
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function simuladorPrestamos() {

    let Capital = parseInt(prompt("Ingrese el monto a solicitar:"))
    let Cuotas = parseInt(prompt("ingrese la cantidad de cuotas"))
    let Tna = parseFloat(prompt("ingrese la TNA")/100)

    console.log("A continuacion les dejamos los terminos y condiciones de su prestamo")
    if(Capital>0) {
        for(i=1;i<=Cuotas;i++){
            n1 = Capital/Cuotas;
            n2 = Capital*Tna/Cuotas;
            n3 = Capital*Tna;
            i1 =  n1+n2

            console.log("Cuota nro:", i, " es", i1)

        }

    }
    else{
            alert("Ingrese un numero entero mayor a cero")
        }




console.log("Capital a solicitar: ", Capital);
console.log("Numero de cuotas:", Cuotas);
console.log("Tasa de interes:", Tna);
console.log("Capital + Intereses:", Capital+n3)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let opcion = parseInt(prompt("Elija un opcion: \n 1-Depositar \n 2-Retirar \n 3-Prestamos \n 4-Salir"))

while(opcion !== 4)  {
    switch(opcion){
        case 1:
            Deposito()
            break
        case 2:
            Retiro()
            break
        case 3:
            simuladorPrestamos()
            break
        default:
            alert("Opcion incorrecta")
            break
    }
    opcion = parseInt(prompt("Elija un opcion: \n 1-Depositar \n 2-Retirar \n 3-Prestamos \n 4-Salir"))
}




