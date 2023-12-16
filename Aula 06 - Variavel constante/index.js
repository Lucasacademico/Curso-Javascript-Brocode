// Variavel constante = Não pode ser alterada ao longo do código
// OBS: Nome da var deve ser maiuscula

const PI = 3.14159
let radius; //raio
let circ;

radius = window.prompt("Enter the radius of a circle")
radius = Number(radius);

// pi = 420.60; // tentando alterar o valor de Pi constante ocorrerá erro.
circ = 2 * PI * radius;
console.log("The circunference is: ", circ)
