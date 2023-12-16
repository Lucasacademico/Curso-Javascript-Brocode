

//Modo fácil: Usando window prompt
// let username = window.prompt("Qual seu nome? ");
// console.log(username);

// recebendo valor de input html 
let userHtml
document.getElementById("myButton").onclick = function () {

    userHtml = document.getElementById("myText").value; // REcebe o valor da tag input
    console.log(userHtml); // Inprime no console o valor recebido pelo input do usuário
    document.getElementById("myLabel").innerHTML = "Hello " + userHtml; // Na tag Label (que possui a id myLabel) o valor é alterado por 'Hello + userHtml

}

/*
1 - let userHtml;: Isso cria uma variável chamada userHtml para armazenar dados mais tarde.

2 - document.getElementById("myButton").onclick = function(){ ... }: Isso atribui uma função a ser executada quando o botão com o ID "myButton" for clicado. Tudo dentro das chaves {} é o que acontecerá quando o botão for clicado.

3 - userHtml = document.getElementById("myText").value;: Aqui, o valor inserido no campo de texto com o ID "myText" é obtido e armazenado na variável userHtml.

4 - console.log(userHtml);: Este comando exibe o valor que foi obtido do campo de texto no console do navegador para fins de verificação.

5 - document.getElementById("myLabel").innerHTML = "Hello " + userHtml;: Essa linha atualiza o conteúdo do elemento com o ID "myLabel" no HTML. Ele substitui o conteúdo desse elemento pela string "Hello " seguida pelo valor que o usuário inseriu no campo de texto.
*/ 