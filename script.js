// Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
let numero = prompt("Hola!, Ingresa un número");
if(numero >= 1000){
    alert("hey! tu número es mayor 1.000 :D")
}else{
    alert("hey! tu número es menor a 1.000 :D")
}
// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola
 let texto = prompt("Hola! ingresa un texto aqui");
if (texto == "Hola" || texto ==  "hola" || texto == "HOLA") {
    console.log("la palabra que ingresaste es Hola, hehe")
} else{
    console.log("la palabra que ingresaste no es Hola , hehe")
} 

//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
let numero2 = prompt("Ingresa otro número por favor")
if (numero2 >= 10 && numero2 <= 50){
    alert("Tu número se encuentra entre el 10 y el 50")
} else{
    console.log("tu numero es otro :(")
}