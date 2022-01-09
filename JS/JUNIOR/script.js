/*CURSO CON DALTO*/

/*-------------------THEORY-------------------*/
/*
** prompt()-->nos permite colocar un input y se puede almacenar en una variable.
** string1.concat(string2/number)--> Permite concatenar, pero al menos uno de ellos debe ser string.
** `${}`--> Para concatenar strings con varibales dentro de las llaves. Los back ticks tambien se usan para colocar codigo html,css dentro.
**  a"==="b --> 'a' es igual a 'b' en valor y tipo de dato?
	a"!=="b --> 'a' es diferente a 'b' en valor y tipo de dato?
** Array asociativo--> Diccionarios en Python.

* Bucles

** For in--> Devuelve el indice de los elementos de un array. Si es un array asociativo, devuelve los valores, ya que el iterador actua como las 'keys'.
** For each--> 
** For of--> Devuelve el elemento de un array. No funciona con arrays asociativos.


**Label-->Permite encapsular bloques de codigo.
const array1 = ["marco", "lorem", "ipsum"];
const array2 = ["rosa", "miguel", array1];

forItems: --> Label
for (array in array2) {
	if (array == 2) {
      for (element of array1) {
        console.log(element);
		break forItems;        
      }
    } else {
    	console.log(array2[array]);
    }
}

* Funciones
Funcion normal--> 'function foo() {}' | 'foo = function () {}'
Funcion Fecha--> const foo = (parm1, param2, ...) => {}. Si solo usamos un parametro ya no es necesario el parentesis. Y si solo se va a tener una linea como cuerpo, ya no es necesario las llaves. Con tod eso, la function flecha quedaria asi: const foo = param1 => something code;

* POO
Una clase esta conformada por un constructor, atributos y metodos(funciones)
** Abstraccion--> Tomar en cuenta las partes mas importantes del problema.
** Modularizacion---> Dividir el problema en pequeñas partes.
** Encapsulamiento--> Los datos son privados(encapsulados). Los usuarios no pueden acceder a ellos.
** Polimorfismo--> Un objeto se comporta de distinta manera con un mismo metodo.
** Inheritance--> Hereda todo de la clase matriz y agrega mas cosas.
** Metodos estaricos--> No necsita que la clase se defina para ser creado.
** Metodos Getters--> Son para obtener un valor
** Metodos Setters--> Son para modificar o definir un valor

Ejemplo:

class Animal {
	constructor(_especie, _edad, _color) {
		// Atributos
		this.especie = _especie;
		this.edad = _edad;
		this.color = _color;
		this.info = `Soy un ${this.especie}, tengo ${this.edad} año(s) y soy de color ${this.color}. <br>`
	}

	// Creando metodos (funciones normales o funciones flecha sin 'const', 'let', 'var').
	verInfo = () => document.write(this.info);
};

class Perro extends Animal {
	constructor(_especie, _edad, _color, _raza) {
		super(_especie, _edad, _color);
		// this.raza = _raza;
		this.raza = _raza;
	}

	ladrar = () => document.write(`Soy de raza <b style='font-size:20px'>${this.raza}</b> y digo, ¡WAW! <br><br>`);

	// Setters
	set setRaza (newName) { this.raza = newName;}

	// Getters
	get getRaza () { return this.raza; }
}

// Creando instancias con 'const'
const perro = new Perro("perro", 5, "marron", "Pitbull");
const gato = new Animal("gato", 2, "blanco");
const pajaro = new Animal("pajaro", 1, "azul");

// Llamando a los metodos.
document.write("<b style='color:blue'>Antes de modificar la raza</b> <br>");
perro.verInfo();
perro.ladrar(); 
// gato.verInfo();
// pajaro.verInfo();

perro.setRaza = "Doberman";
document.write("<b style='color:red'>Despues de modifica la raza</b> <br>");
perro.verInfo();
perro.ladrar();
document.write(`<b style='color:green; font-size:20px'>Obtiene la raza ${perro.getRaza}</b>`);
*/
/*-----------------END OF THEORY--------------*/

/*-------------------------CAPITULO 1------------------*/
/*

#1
Dinero que tiene cada personaje

--> roberto = $1.5;
--> pedro = $1.7;
--> cofla = $3;


//Precios de los helados
let palitoAgua = 0.6;
let palitoCrema = 1;
let bombomHeladix = 1.6;
let bombomHeladovich = 1.7;
let bombomHelardo = 1.8;
let potecito = 2.9;
let pote = 2.9;


//Podemos repetir esto con los demas (se puede mejroar haciendo con funciones).
let dineroCofla = parseInt(prompt("Por favor ingrese el monto total que tiene: "));

if (dineroCofla >= 0.6 && dineroCofla < 1) {
  alert(`Cofla, Puedes comprar un Palito Agua - $ ${palitoAgua} USD.
		  y te sobran ${dineroCofla - 0.6} USD.`);
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  alert(`Cofla, Puedes comprar un Palito Crema - $ ${palitoCrema} USD.
		  y te sobran ${dineroCofla - 1} USD`);
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  alert(`Cofla, Puedes comprar un Bombom Heladix - $ ${bombomHeladix} USD.
		  y te sobran ${dineroCofla - 1.6} USD`);
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  alert(`Cofla, Puedes comprar un Bombom Heladovich - $ ${bombomHeladovich} USD.
		  y te sobran ${dineroCofla - 0.7} USD`);
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  alert(`Cofla, Puedes comprar un Bombom Helardo - $ ${bombomHelardo} USD.
		  y te sobran ${dineroCofla - 1.8} USD`);
} else if (dineroCofla >= 2.9) {
  alert(`Cofla, Puedes comprar potecito - $ ${potecito} USD o pote $ ${pote} USD.
		  y te sobran ${dineroCofla - 2.9} USD`);
} else {
  alert(`Cofla, lo siento, No te alcanza para comprarte un helado :'(`);
}

//Version mejorada

let palitoAgua = 0.6;
let palitoCrema = 1;
let bombomHeladix = 1.6;
let bombomHeladovich = 1.7;
let bombomHelardo = 1.8;
let potecito = 2.9;
let pote = 2.9;

const buyIcecream = (name) => {
	let money = parseFloat(prompt(`¿cuánto dinero tienes ${name}?`));
	if (money >= 0.6 && money < 1) { return `${name}, Puedes comprar un Palito Agua - $ ${palitoAgua} USD.
	y te sobran ${money - 0.6} USD.`}
	if (money >= 1 && money < 1.6) { return `${name}, Puedes comprar un Palito Crema - $ ${palitoCrema} USD. y te sobran ${money - 1} USD`;}
	if (money >= 1.6 && money < 1.7) { return `${name}, Puedes comprar un Bombom Heladix - $ ${bombomHeladix} USD. y te sobran ${money - 1.6} USD`;}
	if (money >= 1.7 && money < 1.8) { return `${name}, Puedes comprar un Bombom Heladovich - $ ${bombomHeladovich} USD. y te sobran ${money - 1.7} USD`;}
	if (money >= 1.8 && money < 2.9) { return `${name}, Puedes comprar un Bombom Helardo - $ ${bombomHelardo} USD. y te sobran ${money - 1.8} USD`;}
	if (money >= 2.9) { return `${name}, Puedes comprar potecito - $ ${potecito} USD o pote $ ${pote} USD. y te sobran ${money - 2.9} USD`;}
	else { return `Lo siento ${name}, No te alcanza para comprarte un helado :'(`;}
}

console.log(buyIcecream("Cofla"));
console.log(buyIcecream("Pedro"));
console.log(buyIcecream("Roberto"));


// #2

// let bolet = 0.9;
// let money = 3;

const buyBoleto = (boleta, money) => {
	if ((boleta * 3) <= money) {
		let vuelto = parseFloat(money) - (boleta*3);
		if (vuelto == 0) {
			document.write(`¡Puedes comprar 3 boletas de loteria! y te sobrarían ${vuelto}`);	
		} else {
			document.write(`¡Puedes comprar 3 boletas de loteria! y te sobrarían ${vuelto} ¡Debes regalar el vuelto!`);
		}
		return;
	}

	if ((boleta * 2) < money) {
		document.write(`¡Puedes comprar 2 boletas de loteria! y te sobrarían ${parseFloat(money) - (boleta*2)}`);
		return;
	}

	if (boleta < money) {
		document.write(`¡Puedes comprar 1 boleta de loteria! y te sobrarían ${parseFloat(money) - boleta}`);
		return;
	}

	if (boleta > money) {
		document.write("Lo siento, no te alcanza para un boleto de loteria");
	}
}
buyBoleto(0.9, 3);


// #3

// 3 sospechosos, entre ellos Cofla.
// 1 = miente, 2 = verdad, 3 = indeciso.

const detectLies = name => {
	const lie = 1;
	const truth = 2;
	const hesitation = 3;
	let answer = prompt(`¿${name} mintió?`);

	if (answer == lie) {
		document.write(`${name} mintió. Se procede a realizar una descarga eléctrica. </br>`)
	} else if (answer == truth) {
		document.write(`${name} dijo la verdad. No se procede con la descarga eléctrica. </br>`);
	} else if (answer == hesitation) {
		document.write('Existe indecisión. ¡La pregunta debe ser más clara! </br>');
	}
};

detectLies("Sospechoso1");
detectLies("Sospechoso2");
detectLies("Cofla");
*/
/*-------------------------CAPITULO 1------------------*/

/*-------------------------CAPITULO 2------------------*/
/* #1 
const MAYOR_EDAD = 18;
const EDAD_LIMIT = 30;
let free = true;


const validarCliente = time => {
	let edad = parseInt(prompt("¿Cuál es tu edad?"));
	if ((edad >= MAYOR_EDAD) && (edad <= EDAD_LIMIT)) {
		if ((time >= 2) && (time <= 4) && free) {
			alert(`Son las ${time} hs y eres el primero en llegar a esta hora. Adelante, disfruta a las garotas. No pagas.`);
			free = false;
		} else {
			alert(`Son las ${time} hs, tendras que pagar tu entrada.`);
		}
	} else if (edad < MAYOR_EDAD){
		alert("Lo siento wachin, ¡eres menor de edad tilin!");
	} else {
		alert(`Lo siento, No estas en el rango de edad permitido.`);
	}
}

//Testeando
validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.5);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);

*/
/*#2
//---VARIABLES---	
let alumnos = parseInt(prompt("¿Cuantos alumnos son?")); // Para el problema serian 19.
let days = 10; // 1 mes fijado serian 30 dias.
let asistencia = [];

for (let index = 0; index < alumnos; index++) {
	asistencia[index] = [prompt(`Nombre del alumno ${index + 1}:`), 0];	
}

//----Funcion Principal para la toma de asistencia----
const tomarAsistencia = (nombre, index) => {
	let lista = prompt(`¿${nombre} asistio? [s/n]`);
	if (lista == "s" || lista == "S") {
		asistencia[index][1]++;
	}
}

//----Por los 30 dias----
for (let index = 0; index < days; index++) {
	for (const alumnos in asistencia) {
		tomarAsistencia(asistencia[alumnos][0], alumnos);		
	}
}

//----Mostrar la informacion total----
for (const alumno in asistencia) {
	let show = `${asistencia[alumno][0]}: <br>
				**ASISTENCIA: ${asistencia[alumno][1]} <br>
				**AUSENCIA: ${days - asistencia[alumno][1]} `;
	if ((days - asistencia[alumno][1]) > (.1 * days)) {
		show += " <b style='color: red'>REPROBADA(O) POR INASISTENCIAS</b> <br><br>";
	} else {
		show += "<br><br>";
	}
	document.write(show);
}
*/

/* #3
// Continuacion --> Hacer una calculadora.

//----Funciones principales----
const sumar = (num1, num2) => parseInt(num1) + parseInt(num2);
const restar = (num1, num2) => parseInt(num1) - parseInt(num2);
const dividir = (num1, num2) => parseInt(num1) / parseInt(num2);
const multiplicar = (num1, num2) => parseInt(num1) * parseInt(num2);

//----Funcion de la operacion
const operacionPrincipal = () => {
	let run = true;
	do {
		let operacion = parseInt(prompt(`
		¿Que operacion desea realizar? (Presione enter para continuar)
					1. Sumar  
					2. Restar  
					3. Dividir  
					4. Multiplicar`));
		
		//----Condiciones----
		if (operacion == 1) {
			let pNum = parseInt(prompt(`Ingrese el primer numero a sumar:`));
			let sNum = parseInt(prompt(`Ingrese el segundo numero a sumar:`));
			let resultado = sumar(pNum, sNum);
			alert(`El resultado de la operacion es ${resultado}.`);
		} else if (operacion == 2){
			let pNum = parseInt(prompt(`Ingrese el primer numero a restar:`));
			let sNum = parseInt(prompt(`Ingrese el segundo numero a restar:`));
			let resultado = restar(pNum, sNum);
			alert(`El resultado de la operacion es ${resultado}.`);
		} else if (operacion == 3){
			let pNum = parseInt(prompt(`Ingrese el primer numero a dividir:`));
			let sNum = parseInt(prompt(`Ingrese el segundo numero a dividir:`));
			let resultado = dividir(pNum, sNum);
			alert(`El resultado de la operacion es ${resultado}.`);
		} else if (operacion == 4){
			let pNum = parseInt(prompt(`Ingrese el primer numero a multiplicar:`));
			let sNum = parseInt(prompt(`Ingrese el segundo numero a multiplicar:`));
			let resultado = multiplicar(pNum, sNum);
			alert(`El resultado de la operacion es ${resultado}.`);
		} else {
			alert("¡No existe la operacion elegida!");
		}

		let question = prompt("¿Deseas realizar otra operación? [s/n]");
		if (question == "S" || question == "s") {
			continue;
		} else if (question == "N" || question == "n") {
			return;
		} else {
			alert("Opcion no válida. Inténtelo de nuevo.");
			return;
		}
	} while (run);
}

operacionPrincipal();
*/
/*-------------------------CAPITULO 2------------------*/

/*-------------------------CAPITULO 3------------------*/

/*#1*/
class Celular {
	constructor(_color, _peso, _tamano, _camara, _ram) {
		this.color = _color;
		this.peso = _peso; //gramos
		this.tamano = _tamano; //pulgadas
		this.camara = _camara; //pixeles
		this.ram = _ram; //gigabytes
		this.encendido = false;
	}

	mobilePrenderApagar() {
		if (this.encendido == false) {
			alert("Encendiendo celular...");
			this.encendido = true;
		} else if (this.encendido == true) {
			alert("¡Celular ya está encendido! Apagando...");
			this.encendido = false;
		}
	}

	mobileReiniciar() {
		if (this.encendido == true) {
			alert("Reiniciando celular..");
		} else {
			alert("Celular esta apagado. ¡No se puede reiniciar!");
		}
	}

	mobileFotos() {
		alert(`Tomando foto con una resolucion de pantalla: ${this.camara}`);
	}

	mobileGrabar() {
		alert(`Grabando con una resolución de pantalla de: ${this.camara}`);
	}

	mobileInfo() {
		return `
					Celular: <br>
						Color: <b>${this.color}</b> <br>
						Peso: <b>${this.peso} gramos</b> <br>
						Tamaño: <b>${this.tamano} pulgadas</b> <br>
						Camara: <b>${this.camara} megapixeles</b> <br>
						RAM: <b>${this.ram}</b> GB<br>`;
	}
}

class AltaGama extends Celular {
	constructor(_color, _peso, _tamano, _camara, _ram, _camaraExtra) {
		super(_color, _peso, _tamano, _camara, _ram);
		this.camaraExtra = _camaraExtra;
	}

	grabarLento() {
		alert(`Grabando en camara lenta...`);
	}

	reconocimientoFacial() {
		alert(`Reconocimiento listo e iniciando...`);
	}

	altaGamaInfo() {
		return this.mobileInfo() + `Camara Extra: <b>${this.camaraExtra} megapixeles</b><br>`;
	}
}

//----Celular normal----
const celular1 = new Celular("rojo", 150, 5.2, 12, 2);
const celular2 = new Celular("negro", 160, 5.8, 16, 3);
const celular3 = new Celular("azul", 120, 5.1, 10, 1);

celular1.mobilePrenderApagar();
celular1.mobileFotos();
celular1.mobileReiniciar();
celular1.mobilePrenderApagar();

document.write(`
${celular1.mobileInfo()} <br>
${celular2.mobileInfo()} <br>
${celular3.mobileInfo()} <br>`
);

//----Celular alta gama----

const celular4 = new AltaGama("blanco", 160, 5.8, 14, 4, 18);
const celular5 = new AltaGama("verde", 180, 6, 13, 5, 22);

document.write(`
${celular4.altaGamaInfo()} <br><br>
${celular5.altaGamaInfo()} 
`);


/*#2


class AppParaDescargar {
	constructor(_cantidadDescargas, _puntuacion, _peso) {
		this.cantidadDescargas = _cantidadDescargas;
		this.puntuacion = _puntuacion;
		this.peso = _peso;
		this.instalado = false;
		this.abierto = false;
	}
	instalarDesinstalarApp () {
		if (this.instalado == false) {
			alert(`Instalando aplicacion..`);
			this.instalado = true;
		} else {
			alert(`App ya esta instalada. Desinstalando...`);
			this.instalado = false;
		}
	}

	abrirCerrarApp() {
		if (this.instalado == true) {
			if (this.abierto == false) {
				alert("Abriendo aplicacion...");
				this.abierto = true;
			} else {
				alert("App abierta. Cerrando...");
				this.abierto = false;
			}
		} else {
			alert("No se puede abrir o cerrar la aplicacion. ¡No esta instalada!");
		}
	}

	appInfo() {
		return `
				Información de la App: <br>
				Cantidad de Descargas: <b>+${this.cantidadDescargas} millon(es)</b> <br>
				Puntuacion: <b>${this.puntuacion} estrellas</b> <br>
				Peso: <b>${this.peso} Mbs</b> <br>`;
	}
}

const app1 = new AppParaDescargar(100, 4.6, 200);
const app2 = new AppParaDescargar(120, 4.8, 220);

document.write(`
${app1.appInfo()} <br><br>
${app2.appInfo()} <br>
`);

app1.instalarDesinstalarApp();
app1.abrirCerrarApp();
app1.abrirCerrarApp();
app1.instalarDesinstalarApp();
*/
/*-------------------------CAPITULO 3------------------*/

/*-------------------------CAPITULO 4------------------*/
/*#1
//----Funciones----
class Calculadora {
	constructor(){};
	sumar(num1, num2) {return num1 + num2};
	restar(num1, num2) { return num1 - num2};
	dividir(num1, num2) { return num1 / num2};
	multiplicar(num1, num2) { return num1 * num2};
	potencia(base, exp) { return base ** exp};
	raizCubica(num) { return Math.cbrt(num)};
	raizCuadrada(num) { return Math.sqrt(num)};
}
const calculadora = new Calculadora();

alert("¿Que operacion desea realizar? (Presione enter para continuar)");
let operacion = parseInt(prompt(`1. Sumar  2. Restar  3. Dividir  4. Multiplicar  5. Potencia  6. Raiz Cuadrada  7. Raiz Cubica`));

//----Condiciones----

if (operacion == 1) {
	let pNum = parseInt(prompt(`Ingrese el primer numero a sumar:`));
	let sNum = parseInt(prompt(`Ingrese el segundo numero a sumar:`));
	let resultado = calculadora.sumar(pNum, sNum);
	alert(`El resultado de la operacion es ${resultado}.`);
} else if (operacion == 2){
	let pNum = parseInt(prompt(`Ingrese el primer numero a restar:`));
	let sNum = parseInt(prompt(`Ingrese el segundo numero a restar:`));
	let resultado = calculodora.restar(pNum, sNum);
	alert(`El resultado de la operacion es ${resultado}.`);
} else if (operacion == 3){
	let pNum = parseInt(prompt(`Ingrese el primer numero a dividir:`));
	let sNum = parseInt(prompt(`Ingrese el segundo numero a dividir:`));
	let resultado = calculadora.dividir(pNum, sNum);
	alert(`El resultado de la operacion es ${resultado}.`);
} else if (operacion == 4){
	let pNum = parseInt(prompt(`Ingrese el primer numero a multiplicar:`));
	let sNum = parseInt(prompt(`Ingrese el segundo numero a multiplicar:`));
	let resultado = calculadora.multiplicar(pNum, sNum);
	alert(`El resultado de la operacion es ${resultado}.`);
} else if (operacion == 5){
	let base = parseInt(prompt(`Ingrese el numero base:`));
	let exp = parseInt(prompt(`Ingrese el exponente:`));
	let resultado = calculadora.potencia(base, exp);
	alert(`El resultado de la operacion es ${resultado}.`);
} else if (operacion == 6){
	let num = parseInt(prompt(`Ingrese el numero a sacar raiz cubica:`));
	let resultado = calculadora.raizCuadrada(num);
	alert(`El resultado de la operacion es ${resultado}.`);
} else if (operacion == 7){
	let num = parseInt(prompt(`Ingrese el numero a sacar raiz cubica:`));
	let resultado = calculadora.raizCubica(num);
	alert(`El resultado de la operacion es ${resultado}.`);
} else {
	alert("¡No existe la operacion elegida!");
}
*/

/*#2

//---Funcion de las materias----
const materia = (_materia) => {
	let materias = {
		"Fisica": {
			"Profesor": "Fulano",
			"alumnos": ["Carlos", "Miguel", "Angel", "Cofla", "Maria"]
		},
		"Quimica": {
			"Profesor": "Mengano",
			"alumnos": ["Carlos", "Angel", "Cofla", "Maria"]
		},
		"Lenguaje": {
			"Profesor": "Martins",
			"alumnos": ["Carlos", "Arturo", "Miguel", "Angel", "Cofla", "Maria"]
		},
		"Programacion": {
			"Profesor": "Talonio",
			"alumnos": ["Miguel", "Angel", "Maria", "Tolentino", "Saber"]
		}
	}

	if (materias[_materia]) {
		return [materias[_materia], _materia];
	} else {
		return materias;
	}
};

//----Funcion para mostrar la informacion----
const showInfo = (_materia) => {
	let infoMateria = materia(_materia);
	if (infoMateria !== false) {
		document.write(`Alumnos presentes en <b>${infoMateria[1]}</b>: <b style="color:red">${JSON.stringify(infoMateria[0]["alumnos"])}</b><br>
		Profesor asignado: <b style="color:blue">${infoMateria[0]["Profesor"]}</b><br><br>`);
	}
};
//----Test----
//showInfo("Fisica");
//showInfo("Programacion");
//showInfo("Quimica");
//showInfo("Lenguaje");

//----Funcion para determinar en cuantas materias esta un alumno----
const materiasInscritas = (_alumno) => {
	let _materias =  materia(); //Devuelve el objeto completo.
	let _cursos = [];  //Se asigna todas materias que hay.
	let showCursos = [];  //Se asigna las materias en el que esta matriculado el alumno.

	for (const materia in _materias) {
		_cursos.push(materia);
	}

	for (let i = 0; i < _cursos.length; i++) {
		let _materia = materia(_cursos[i]);
		if (_materia[0]["alumnos"].includes(_alumno) === true) {
			showCursos.push(_materia[1]);
		}
	}
	document.write(`${_alumno} esta matriculado(a) en ${showCursos.length} curso(s): <br><br>`);
	for (let index = 0; index < showCursos.length; index++) {
		let profesor = materia(showCursos[index]);
		document.write(`<b style="color:green">${showCursos[index]}</b> -->Profesor asignado: <b style="color:purple">${profesor[0]["Profesor"]}</b><br>`);
	}
};

//materiasInscritas("Cofla");

//----Funcion para la matricula del estudiante----

const matriculaCurso = (alumno) => {
	let _materias = materia();
	let curso = prompt(`Hola ${alumno}, ¿en que curso deseas matricularte?`);
	
	if ((_materias[curso]["alumnos"].length >= 0) && (_materias[curso]["alumnos"].length < 20)) {
		alert("Inscrito exitosamente. ¡Ya puedes asistir a la clase!")
		_materias[curso]["alumnos"].push(alumno);
		document.write(`Alumnos matriculados en <b>${curso}</b>: <b>${_materias[curso]["alumnos"]}</b><br>`);
	} else if (_materias[curso]["alumnos"].length >= 20) {
		alert(`Lo siento ${alumno}, el limite se ha alcanzado. ¡No te puedes matricular!`);
	}
};

matriculaCurso("Cofla");
*/

/*-------------------------CAPITULO 4------------------*/


/*-------------------------CAPITULO 5------------------*/
/*
const materias = {
	"Fisica" : [90, 8, 75, "Fisica"], //[Asistencia(%), Promedio(/10), Trabajos(%)]
	"Quimica" : [47, 9, 100, "Quimica"],
	"Lenguaje" : [94, 7, 50, "Lenguaje"],
	"Programacion" : [99, 8, 75, "Programacion"],
	"Calculo" : [89, 7, 25, "Calculo"],
	"Biologia" : [92, 6, 75, "Biologia"]
};

const aprobo = () => {
	for (materia in materias) {
		let asistencia = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2];

		console.log(`${materias[materia][3]}:`); 
		
		if (asistencia >= 90) {
			console.log(`%c		Asistencia en orden`, `color:green`);
		} else {
			console.log(`%c		Falta en asistencias`, "color:red");
		}

		if (promedio >= 7) {
			console.log(`%c		Promedio en orden`, "color:green");
		} else {
			console.log(`%c		Promedio desaprobado`, "color:red");
		}

		if (trabajos >= 90) {
			console.log(`%c		Trabajos en orden`, `color:green`);
		} else {
			console.log(`%c		Faltan trabajos`, "color:red");
		}
		console.table(materias);
	}

};

//aprobo();

//----Funcion para el trabajo de un estudiante----

let trabajar = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "120 minutos de trabajos practicos";
let homework = "35 minutos de trabajos en el hogar";
let descanso = "10 minutis de descanso";

const trabajo = () => {
	console.info("TAREAS:");

	for (let i = 1; i <= 14; i++) {
		
		if (i == 1) {
			console.group("Semana 1");
		}
		console.groupCollapsed("Dia " + (i));
		console.log(trabajar);
		console.log(descanso);
		console.log(estudio);
		console.log(tp);
		console.log(homework);
		console.groupEnd();
		
		if (i == 7) {
			console.groupEnd();
			console.groupCollapsed("Semana 2");
		}
	}
	console.groupEnd();
};

trabajo();  //Well done!
*/
/*-------------------------CAPITULO 5------------------*/

/*-------------------------CAPITULO 6------------------*/

/*#1 DOM (Document Object Model) */

//-->Metodos de seleccion de elementos.
//let parrafo = document.getElementById("parrafo"); // Nos devuelve el objeto que tenga dicho "id".
//let parrafo = document.getElementsByTagName("p");  //Este metodo nos devuelve una objeto lista (no array) de elementos "p".
//let parrafo = document.querySelector(".segundo-parrafo"); //Nos devuelve un objeto con el primer elemento que coincida.
//let parrafo = document.querySelectorAll(".tercer-parrafo");  //Nos devuelve un objeto con todas las coincidencias del elemento.
//document.write(parrafo);

//-->Metodos para obtener, definir, eliminar valores de atributos de los elemtos.
//let choto = document.querySelector(".choto");
//choto.setAttribute("type", "datetime-local"); //Modifica el valor de un atributo. 1º-> el atributo a modificar; 2º-> el valor.
//document.write(`<br><br>Atributo obtenido: <b>${choto.getAttribute("type")}</b>`);  //getAttribute obtiene el atributo ingresado.
//choto.removeAttribute("type");  //Remoueve el atributo ingresado.

//-->Atributos Globales
//let titulo = document.querySelector(".titulo");
//titulo.setAttribute("contentEditable", "true"); //"contentEditable"->Permite editar al usuario.
//titulo.setAttribute("dir", "ltr"); //Permite direccionar el texto de izquierda a derecha o viceversa.
//titulo.setAttribute("hidden", "true"); //Oculta el elemento
//titulo.setAttribute("tabindex", "0"); //Permite hacer un focus y seleccionar el elemento por orden.
//titulo.setAttribute("title", "Cueva ctm!"); //Nos muestra un pop-up con el mensaje indicado en el elemento.

//-->Atributos de inputs. Estos atributos se acceden directamente.
//let input = document.querySelector(".input-normal");
//document.write(input.className); //Muestra el nombre de la clase
//document.write(input.value = "123"); //Nos muestra el valor del input
//document.write(input.type = "range"); //Muestra el tipo del input.
//input.accept = "image/png"; //Funciona con el type=file. Para que acepte ciertos formatos de archivo en especifico.
//input.minLength = 4; // Especifica la cantidad minima de caracteres a ingresar.
//input.placeholder = "Cueva ctm!"; //Coloca el mensaje como una sombra en el input.
//input.required = "true"; //Permite que un campo sea requerido u obligatorio.

//-->Atributo STYLE.
//let titulo = document.querySelector(".titulo");
//titulo.style.color = "purple";

//-->Clases, classList y Metodos de classList
//let titulo = document.querySelector(".titulo");
//titulo.classList.add("grande"); //Agrega una clase mas al elemento. Si no existe, crea uno nuevo.
//titulo.classList.add("grande"); //Remueve una clase del elemento.
//document.write(titulo.classList.item(1)); //Devuelve una clase con el index especificado.
//document.write(titulo.classList.contains("grande")); //Verifica si existe o no una determinada clase.
//titulo.classList.toggle("lomos"); //Agrega si la clase no existe, elimina si existe.
//titulo.classList.replace("grande", "chico"); //Reemplaza una clase por otra.

//-->Obtencion y Modificacion de elementos.
//let titulo = document.querySelector(".titulo");
//document.write(titulo.textContent); //Devuelve SOLO texto del elemento, sin html que estan dentro de él.
//document.write(titulo.innerText); //Devuelve el texto visible; si esta en "hidden", no lo muestra. Ya no se usa.
//alert(titulo.innerHTML); //Muestra el texto del elemento con html dentro de él.
//alert(titulo.outerHTML); //Muestra el elemento completo; elementos mas textos dentro de ellos.

//-->Creacion de elementos.
//let contenedor = document.querySelector(".contenedor");

//let item = document.createElement("LI"); //Crea un elemento.
//let textDelItem = document.createTextNode("Esto es un item de la lista"); //Crea un texto nodo.
//item.appendChild(textDelItem); //Agrega un nodo (texto, elemento) a su padre contenedor.
//item.innerHTML = "Esto es un item de la lista"; //Una forma mas rapida de agregar texto a un elemento.
//contenedor.appendChild(item); //Lo mismo que lo explicado en la linea anterior.

//let fragmento = document.createDocumentFragment(); //Permite crear de manera eficiente muchos elementos a la vez.
//for (let i = 0; i < 20; i++) {
//	let item = document.createElement("LI");
//	item.innerHTML = "Esto es un item de la lista";
//	fragmento.appendChild(item);
//}
//contenedor.appendChild(fragmento); //Una vez creado las listas, se agrega al contenedor padre.

//-->Obtencion y modificacion de los contenedores(elementos) hijos.
//let contenedor = document.querySelector(".contenedor");
//let primerHijo = contenedor.firstElementChild; //Retorna el primer nodo(elemento) del padre contenedor.
//let ultimoHijo = contenedor.lastElementChild; //Retorna el ultimo nodo(elemento) del padre contenedor.
//let hijos = contenedor.childNodes; //Retorna un "NodeList" con todos los nodos(elementos) del padre contenedor. Esto incluye texto. Se le puede recorren con un "forEach()".
//let hijos1 = contenedor.children; //Retorna un "HTMLCollection" con todos los nodos, excepto los textos. Se puede recorrer con un "for of".

//console.log(primerHijo);
//console.log(ultimoHijo);
//console.log(hijos);
//console.log(hijos1);

//-->Metodos de contenedores(elementos) hijos.
//let contenedor = document.querySelector(".contenedor");
//let h2Nuevo = document.createElement("H2")
//h2Nuevo.innerHTML = "Titulo nuevo";

//let h2Antiguo = document.querySelector(".h2_antiguo");
//contenedor.replaceChild(h2Nuevo, h2Antiguo); //Reemplaza un elemento hijo por otro.
//contenedor.removeChild(h2Antiguo); //Remueve un elemento hijo existente.
//document.write(contenedor.hasChildNodes());//Verifica si tiene elementos hijos o no. Esto incluye texto.

//-->Propiedades de contenedores(elementos) padres.
//let contenedor = document.querySelector(".contenedor");
//console.log(contenedor.parentElement); //Muestra el elemento padre del contenedor. "parentNode" es muy similar.

//-->Propiedades de contendores hermanos.
//let h2_antiguo = document.querySelector(".h2_antiguo");

//console.log(h2_antiguo.nextElementSibling); //Devuelve el siguiente elemento cercano. No cuenta al texto.
//!Cuando se refiere a texto, nos referimos al espacio que dejamos al tabular los elementos en el archivo html.
//!Para verificar lo mencionado, utilice la propiedad "nextSibling". Sin la palabra "Element". Lo mismo sucede con
//!propiedades anteriores similares.
//console.log(h2_antiguo.previousElementSibling); //Devuelve el aanterior elemento cercano.
//console.log(h2_antiguo.closest(".contenedor")); //Retorna el contenedor padre mas cercado con el selector indicado.

/*#1 PROBLEM 


let divContainer = document.querySelector(".flex-container");

let button = document.querySelector(".send-button");
button.value = button.value.toUpperCase();

//----Funcion Principal----
const setKeys = (key, model, price) => {

	let img = document.createElement("IMG");
	img.setAttribute("src", "llaves.png");
	img.classList.add("key-img");

	let keys = document.createElement("H3");
	keys.innerHTML = `${key}`;
	let models = document.createElement("H4");
	models.innerHTML = `${model}`;
	let prices = document.createElement("P");
	prices.innerHTML = `Precio: <b>$${price}</b>`;

	return [img.outerHTML, keys.outerHTML, models.outerHTML, prices.outerHTML];

};

const changeHidden = (number) => { };

let fragment = document.createDocumentFragment();

//----For Loop----
for (let i = 1; i <= 20; i++) {
	let div = document.createElement("DIV");
	div.classList.add(`item-${i}`, "flex-item");
	div.tabIndex = i; //Al hacer click en la imagen se quede en focus.
	let randomPrice = Math.floor(Math.random() * 80 + 20);
	let randomModel = Math.floor(Math.random() * 10000);
	let showItems = setKeys(`Llave ${i}`, `Modelo ${randomModel}`, `${randomPrice}`);

	div.addEventListener("click", () => { document.querySelector(".key-data").value = randomModel; });
	div.innerHTML = showItems[0] + showItems[1] + showItems[2] + showItems[3]; //...showItems;
	fragment.appendChild(div);

}

divContainer.appendChild(fragment);
*/
/*-------------------------CAPITULO 6------------------*/
