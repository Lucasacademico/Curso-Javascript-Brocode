/* 
Conversão de tipos:
- Altera o tipo de dado para outro

Importante: A conversão da variavel contendo número faz sentido quando concatenamos o numero com uma string (isto transforma a variavel numero se tornando em tipo string, não sendo util para operações com strings embutidas), logo se uma variavel numerica for concatenar, é importante definirmos seu tipo antes, para que esta var não se torne string.
*/

// // Exemplo 1 - de caso sem conversão - imprime valor como string
// let idade = window.prompt("Qual sua idade?");
// idade += 1;
// console.log("Feliz aniversário, você tem", idade, "anos") 

// Exemplo 2 - Convertendo variavel para tipo numero
// let idade = window.prompt("Qual sua idade?");
// console.log(typeof idade); //verificando tipo da var antes de conversão
// idade = Number(idade); // Informando que a variavel é tipo numero
// console.log(typeof idade); //verificando tipo da var após conversão
// idade += 1;
// console.log("Feliz aniversário, você tem", idade, "anos")

// Exemplo 3 - Convertendo valores
let a;
let x;
let y;
let z;

a = 22 // var é numero mesmo sem informar o tipo
x = Number("3.14");
y = String(3.14);
z = Boolean("pizza")

console.log(a, typeof a)
console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

// Lembrando que se concatenarmos uma var numerica com string, essa var se torna uma string tbm. por isso é importante definir seu tipo antes de concatenar


