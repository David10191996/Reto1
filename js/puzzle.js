//Traigo letras
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");
//Traigo botones
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let final = document.getElementById("final");

console.log(btn1);

//Funciones
const boton1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "") {
    numeros.innerHTML = "1";
  } else {
    alert("Pilas estas metiendo el dedo mal!!");
  }
};
const boton2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1") {
    numeros.innerHTML += "2";
  } else {
    alert("Pilas estas metiendo el dedo mal!!");
  }
};
const boton3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12") {
    numeros.innerHTML += "3";
  } else {
    alert("Pilas estas metiendo el dedo mal!!");
  }
};
const boton4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123") {
    numeros.innerHTML += "4";
  } else {
    alert("Pilas estas metiendo el dedo mal!!");
  }
};
const boton5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234") {
    numeros.innerHTML += "5";
  } else {
    alert("Pilas estas metiendo el dedo mal!!");
  }
};
const boton6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12345") {
    numeros.innerHTML += "6";
  } else {
    alert("Pilas estas metiendo el dedo mal!!");
  }
};
const boton7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else if (
    letras.innerHTML == "ABCDEFGHIJ" &&
    numeros.innerHTML == "123456"
  ) {
    numeros.innerHTML += "7";
  } else {
    alert("Pilas estas metiendo el dedo mal!!");
  }
};
const boton8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else if (
    letras.innerHTML == "ABCDEFGHIJ" &&
    numeros.innerHTML == "1234567"
  ) {
    numeros.innerHTML += "8";
  } else {
    alert("Pilas estas metiendo el dedo mal!!");
  }
};
const boton9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else if (
    letras.innerHTML == "ABCDEFGHIJ" &&
    numeros.innerHTML == "12345678"
  ) {
    numeros.innerHTML += "9";
  } else {
    alert("Pilas estas metiendo el dedo mal!!");
  }
};
const boton0 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else if (
    letras.innerHTML == "ABCDEFGHIJ" &&
    numeros.innerHTML == "123456789"
  ) {
    numeros.innerHTML += "0";
  } else {
    alert("Pilas estas metiendo el dedo mal!!");
  }
};

const terminar = () => {
  if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234567890") {
    alert("Has terminado el Puzzel, Felicitaciones!!!");
    numeros.innerHTML=":D";
    letras.innerHTML=":D";
  } else {
    alert("No has terminado el puzzel, que siga el juego ");
  }
};

//Eventos

btn1.onclick = () => {
  boton1();
};
btn2.onclick = () => {
  boton2();
};
btn3.onclick = () => {
  boton3();
};

btn4.onclick = () => {
  boton4();
};

btn5.onclick = () => {
  boton5();
};

btn6.onclick = () => {
  boton6();
};

btn7.onclick = () => {
  boton7();
};

btn8.onclick = () => {
  boton8();
};
btn9.onclick = () => {
  boton9();
};
btn0.onclick = () => {
  boton0();
};

final.onclick = () => {
  terminar();
};
