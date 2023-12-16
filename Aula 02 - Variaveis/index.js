
// Declarando variavel sem valor retorna 'undefined'
let age;
console.log(age)

// Atribuindo valor e imprimindo variavel
age = 20;
console.log(age);

// Atribuindo outra variavel e imprimindo seu valor
let age2 = 29;
console.log(age2)

// Atribuindo variavel para string
let primeiroNome = "Lucas"
console.log(primeiroNome);

// Criando variavel para valores booleanos
let estudante = true;
console.log(estudante);

// Concatenando string com variavel
console.log("Olá", primeiroNome)
console.log("Você tem", age2, "anos")
console.log("É estudante?", estudante)

// Aqui, document.getElementById("p1") busca o elemento HTML que possui o ID "p1". Em seguida, innerHTML é usado para modificar o conteúdo desse elemento. Possibilitando então imprimir esses valores na página html.
document.getElementById("p1").innerHTML = "Hello " + primeiroNome;
document.getElementById("p2").innerHTML = "Você tem " + age2 + "Anos"
document.getElementById("p3").innerHTML = "Estudante: " + estudante