// EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
// obtenga el título, color y fuente de la página, el segundo método que indique como desea que
// aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
// propiedades.

class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;
  
    constructor(tituloParam: string, colorParam: string, fuenteParam: string) {
      this.titulo = tituloParam;
      this.color = colorParam;
      this.fuente = fuenteParam;
      this.alineacion = "izquierda"; // Seteo de valor por defecto
    }
  
    obtenerPropiedades(): string {
      return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }
  
    AlineacionTitulo(alineacion: "centro" | "derecha" | "izquierda"): void {
      this.alineacion = alineacion;
    }
  
    imprimirPropiedades(): void {
      console.log(this.obtenerPropiedades());
      console.log(`Alineación: ${this.alineacion}`);
    }
}

const cabecera = new CabeceraPagina("Hola mundo - Titulo", "Black", "Arial");
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

class Calculadora {
  
    sumar(a: number, b: number): number {
      return a + b;
    }
  
    restar(a: number, b: number): number {
      return a - b;
    }
  
    multiplicar(a: number, b: number): number {
      return a * b;
    }
  
    dividir(a: number, b: number): number {
      if (b === 0) {
        throw new Error("No se puede dividir por cero");
      }
      return a / b;
    }
  
    potencia(base: number, exponente: number): number {
      return Math.pow(base, exponente);
    }
  
    factorial(n: number): number {
      if (n < 0) {
        throw new Error("No existe factorial para números negativos");
      }
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * this.factorial(n - 1);
    }
  }

  const calc = new Calculadora();
  console.log("Suma:",calc.sumar(3, 5));
  console.log("Resta:",calc.restar(10, 4));
  console.log("Multiplicación:",calc.multiplicar(6, 7));
  console.log("División:",calc.dividir(8, 2));
  console.log("Potencia:",calc.potencia(2, 3));
  console.log("Factorial:",calc.factorial(5));

// EJERCICIO 3. Crea una clase llamada Canción:
// Atributos: título, género de la canción y un atributo privado que se llame autor.
// Métodos:
// • Crear un constructor que reciba como parámetros el título y género de la canción.
// • Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
// • Crea un método para mostrar los datos de la canción.

class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;
  
    constructor(tituloParam: string, generoParam: string) {
      this.titulo = tituloParam;
      this.genero = generoParam;
    }
  
    //Getters y Setters
    setAutor(autorParam: string){
      this.autor = autorParam;
    }
  
    getAutor(): string {
      return this.autor;
    }
  
    mostrarDatosCancion(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Género: ${this.genero}`);
      console.log(`Autor: ${this.getAutor()}`);
    }
  }
  
const cancion = new Cancion("Imagine", "Rock");
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

class Cuenta {
    public nombre: string;
    public cantidad: number;
    public tipoCuenta: string;
    public numeroCuenta: string;
  
    constructor(nombreParam: string, cantidadParam: number, tipoCuentaParam: string, numeroCuentaParam: string) {
      this.nombre = nombreParam;
      this.cantidad = cantidadParam;
      this.tipoCuenta = tipoCuentaParam;
      this.numeroCuenta = numeroCuentaParam;
    }
  
    // Método para depositar dinero
    depositar(valor: number): void {
      if (valor < 5) {
        console.log("El valor a depositar debe ser mayor a $5.00.");
      } else {
        this.cantidad += valor;
        console.log(`Se ha depositado correctamente $${valor}. Cantidad actual: $${this.cantidad}`);
      }
    }
  
    // Método para retirar dinero
    retirar(valor: number): void {
      if (this.cantidad === 0) {
        console.log("No hay nada en la cuenta para retirar.");
      } else if (valor < 5) {
        console.log("La cantidad a retirar debe ser mayor a $5.00.");
      } else if (valor > this.cantidad) {
        console.log("No tienes suficiente dinero en la cuenta.");
      } else {
        this.cantidad -= valor;
        console.log(`Has retirado $${valor}. Cantidad restante: $${this.cantidad}`);
      }
    }
  
    // Método para mostrar los datos de la cuenta
    mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
      console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
  }

  const miCuenta = new Cuenta("Jefferson", 100, "Ahorros", "123456789");
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

abstract class Persona {
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;
  
    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number) {
      this.nombre = nombreParam;
      this.apellido = apellidoParam;
      this.direccion = direccionParam;
      this.telefono = telefonoParam;
      this.edad = edadParam;
    }
  
    esMayorDeEdad(): void {
        console.log(`${this.nombre} es ${this.edad >= 18 ? "mayor" : "menor"} de edad.`);
    }
  
    abstract mostrarDatos(): void;
}
  
  // Clase Empleado que hereda de Persona
class Empleado extends Persona {
    private sueldo: number;
  
    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number, sueldoParam: number) {
      super(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam);
      this.sueldo = sueldoParam;
    }
  
    cargarSueldo(sueldo: number): void {
      this.sueldo = sueldo;
    }
  
    imprimirSueldo(): void {
      console.log(`El sueldo de ${this.nombre} es $${this.sueldo}`);
    }
  
    mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre} ${this.apellido}`);
      console.log(`Dirección: ${this.direccion}`);
      console.log(`Teléfono: ${this.telefono}`);
      console.log(`Edad: ${this.edad}`);
    }
}

const empleado = new Empleado("Jefferson", "Sanchez", "San Salvador", "12345678", 23, 1200);
empleado.mostrarDatos();
empleado.esMayorDeEdad();
empleado.imprimirSueldo();