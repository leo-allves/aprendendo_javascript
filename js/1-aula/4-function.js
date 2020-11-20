//FAZENDO UMA SOMA

/*function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5,10));

*/

//PROGAMINHA VALIDANDO IDADE (var local)
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));


//PROGAMINHA VALIDANDO IDADE (var Global)
var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);