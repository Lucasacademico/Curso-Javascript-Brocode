let a = window.prompt("Valor do cateto adjacente: ");
a = Number(a)
let b = window.prompt("Valor do cateto oposto: ")
b = Number(b)

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
console.log("Hipotenusa: ", c)