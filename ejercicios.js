// EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
// obtenga el título, color y fuente de la página, el segundo método que indique como desea que
// aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
// propiedades.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
        this.alineacion = "izquierda"; // Seteo de valor por defecto
    }
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente);
    };
    CabeceraPagina.prototype.AlineacionTitulo = function (alineacion) {
        this.alineacion = alineacion;
    };
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log(this.obtenerPropiedades());
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
var cabecera = new CabeceraPagina("Hola mundo - Titulo", "Black", "Arial");
cabecera.obtenerPropiedades();
cabecera.AlineacionTitulo("centro");
cabecera.imprimirPropiedades();
// EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
// • Sumar
// • Restar
// • Multiplicar
// • Dividir
// • Potencia
// • Factorial
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    };
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            throw new Error("No existe factorial para números negativos");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    };
    return Calculadora;
}());
var calc = new Calculadora();
console.log("Suma:", calc.sumar(3, 5));
console.log("Resta:", calc.restar(10, 4));
console.log("Multiplicación:", calc.multiplicar(6, 7));
console.log("División:", calc.dividir(8, 2));
console.log("Potencia:", calc.potencia(2, 3));
console.log("Factorial:", calc.factorial(5));
// EJERCICIO 3. Crea una clase llamada Canción:
// Atributos: título, género de la canción y un atributo privado que se llame autor.
// Métodos:
// • Crear un constructor que reciba como parámetros el título y género de la canción.
// • Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
// • Crea un método para mostrar los datos de la canción.
var Cancion = /** @class */ (function () {
    function Cancion(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
    }
    //Getters y Setters
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.mostrarDatosCancion = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this.getAutor()));
    };
    return Cancion;
}());
var cancion = new Cancion("Imagine", "Rock");
cancion.setAutor("John Lennon");
cancion.mostrarDatosCancion();
// EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
// Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
// Métodos:
// • Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
// número de cuenta.
// • Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
// condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
// depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
// correctamente y la cantidad depositada.
// • Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
// que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
// cuanto le queda en su cuenta.
// Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
// si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
// • Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
// • Define un objeto de la clase Cuenta y llama sus métodos.
var Cuenta = /** @class */ (function () {
    function Cuenta(nombreParam, cantidadParam, tipoCuentaParam, numeroCuentaParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numeroCuenta = numeroCuentaParam;
    }
    // Método para depositar dinero
    Cuenta.prototype.depositar = function (valor) {
        if (valor < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00.");
        }
        else {
            this.cantidad += valor;
            console.log("Se ha depositado correctamente $".concat(valor, ". Cantidad actual: $").concat(this.cantidad));
        }
    };
    // Método para retirar dinero
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad === 0) {
            console.log("No hay nada en la cuenta para retirar.");
        }
        else if (valor < 5) {
            console.log("La cantidad a retirar debe ser mayor a $5.00.");
        }
        else if (valor > this.cantidad) {
            console.log("No tienes suficiente dinero en la cuenta.");
        }
        else {
            this.cantidad -= valor;
            console.log("Has retirado $".concat(valor, ". Cantidad restante: $").concat(this.cantidad));
        }
    };
    // Método para mostrar los datos de la cuenta
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de cuenta: ".concat(this.numeroCuenta));
    };
    return Cuenta;
}());
var miCuenta = new Cuenta("Jefferson", 100, "Ahorros", "123456789");
miCuenta.mostrarDatos();
miCuenta.depositar(50);
miCuenta.retirar(30);
miCuenta.retirar(3);
miCuenta.retirar(200);
// EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
// Atributos: nombre, apellido, dirección, teléfono y edad.
// Métodos:
// • Crear un método constructor para recibir los datos.
// • Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
// • Crea un método para mostrar todos los datos personales (será el método abstracto).
// • Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
// • En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
// • La clase Empleado va heredar de la clase Persona.
// • Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    Persona.prototype.esMayorDeEdad = function () {
        console.log("".concat(this.nombre, " es ").concat(this.edad >= 18 ? "mayor" : "menor", " de edad."));
    };
    return Persona;
}());
// Clase Empleado que hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam, sueldoParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) || this;
        _this.sueldo = sueldoParam;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log("El sueldo de ".concat(this.nombre, " es $").concat(this.sueldo));
    };
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
    };
    return Empleado;
}(Persona));
var empleado = new Empleado("Jefferson", "Sanchez", "San Salvador", "12345678", 23, 1200);
empleado.mostrarDatos();
empleado.esMayorDeEdad();
empleado.imprimirSueldo();
