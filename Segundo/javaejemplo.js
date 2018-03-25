//var edad = prompt("Cuantos años tienes?","Ejemplo: 20");
//var edadint = parseInt(edad);
//var dias = edadint * 365;

//document.write("Has estado vivo: " + dias + " Dias!!");

/////////////////////////////////////RANDOM NUMBER ////////////////////////////////////////////////////

//var numero = prompt("Pon un numero cualquiera positivo","Ejemplo: 20");
//var numero2 = parseInt(numero);
//var RNumber = Math.floor(Math.random()*numero2 + 1);//genera un numero random integer entre 1 y 50 con ayuda del floor que lo redondea hacia abajo
//alert(RNumber);

////////////////////////// CONDICIONALES /////////////////////////////////////

/*var respuesta = prompt("Cuanto es 2+2?");
if (respuesta === "4"){
    alert("Correcto!");
    document.write("Pasaste la prueba!");
}
else{
   alert("No es cierto!");}
*/
   ///////////BOOLEANOS ////////////
/*var correctanswer = false;
var respuesta = prompt("Cuanto es 2+2? ");
if (answer ==="4") {
    var correctanswer = true;
}
if (correctanswer = true){
    alert ("Correcto!");
}
else {
    alert ("No es cierto! ");
}*/

///////////////////operadores /////////////////////
/*var genero = prompt("Cual es tu sexo? ", "Hombre o Mujer");
genero = genero.toLowerCase();

var edad = prompt("Cual es tu edad? ");

if (genero === "hombre" && edad >= "20") {
    alert("Felicidades, eres candidato");
}
else {
    alert("Lo siento, no puedes entrar");
}
*/
///////////////// Funciones //////////////

/*function ejemplodefuncion (){
    document.write("Este es un ejemplo de funciones ");
    var randomnum = 50 * 100;
    return randomnum
}
document.write(ejemplodefuncion());
*/

//////////////////Dice rolling program /////////////////////
/*function girarDado (maximo){
    var RNumber = Math.floor(Math.random()*maximo + 1);
    return RNumber;
}
 var maximo = prompt("Elige uno de estos numeros: 6, 12 o 20 ");
 
 alert(girarDado(maximo));
*/

///////////////////////// LOOPS //////////////////////
/*var x=0;
while (x<4) {
    x += 1;
    document.write("REDRUM" + "   ");
}
var counter = 0;
while (counter <50){
    counter +=1;
    var RNumber = Math.floor(Math.random()*100 + 1);
    document.write(RNumber + "  ");
}*/

//////////////// Adivina un numero //////////////////////////////////
/*var RNumber = Math.floor(Math.random()*10 + 1);
for (Intentos = 0; Resultado != RNumber;Intentos = Intentos+1){
    var Resultado = prompt ("Adivina un numero entre el 1 y el 10 ");
    
}

document.write("<p> Muy bien! lo adivinaste! </p>");
document.write("<p> el numero random era: " + RNumber +"</p>");
document.write("<p> solo te tomo: " + Intentos + " Intentos </p>");
*/
/////////////// ARRAYS /////////////////////////////

var ToDoList = ["Comprar", "Vender", "Jugar", "Programar"];
//alert (ToDoList[2])
document.write("<p> " + ToDoList[0] + "</p>");
document.write("<p> " + ToDoList[1] + "</p>");
document.write("<p> " + ToDoList[2] + "</p>");
document.write("<p> " + ToDoList[3] + "</p>");
document.write("<p> " + ToDoList[4] + "</p>");

ToDoList.push("Ver una pelicula!"); // agregar al final
//alert(ToDoList[4]);
ToDoList.unshift("Primero"); //agregar al principio
//alert(ToDoList[0]);
ToDoList.shift(); //Remueve el primero
document.write("<p> " + ToDoList[0] + "</p>");
document.write("<p> " + ToDoList[1] + "</p>");
document.write("<p> " + ToDoList[2] + "</p>");
document.write("<p> " + ToDoList[3] + "</p>");
document.write("<p> " + ToDoList[4] + "</p>");
ToDoList.pop(); // Remueve el ultimo
document.write("<p> " + ToDoList[0] + "</p>");
document.write("<p> " + ToDoList[1] + "</p>");
document.write("<p> " + ToDoList[2] + "</p>");
document.write("<p> " + ToDoList[3] + "</p>");
document.write("<p> " + ToDoList[4] + "</p>");