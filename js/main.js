
alert("¡Hola Coder!");

let nombre = prompt("Ingrese su nombre");
let salida  = nombre + " " + "ingresado/a";
alert(salida);
console.log(salida);

let numero = prompt("Ingrese un numero");
if (numero < 20) {
    alert("El numero es menor que 20");
    console.log("El numero es menor que 20");
}
else if (numero < 50) {
    alert("El numero es menor que 50");
    console.log("El numero es menor que 50");
}
else if (numero < 100) {
    alert("El numero es menor que 100");
    console.log("El numero es menor que 100");
}
else {
    alert("El numero es mayor que 100");
    console.log("El numero es mayor que 100");
}

let entrada = prompt("Ingresar un dato");
while(entrada != "esc" ){
    alert(nombre + "ingresó" + entrada);
    entrada = prompt("Ingresar otro dato");
}

let repetir = prompt("cuantas veces quiere repetir el ultimo dato")
for (let i = 1; i <= repetir; i++) {
    alert(entrada);
}
