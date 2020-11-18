/*TRABALHANDO COM STRING*/
/*
var nome = "Leonardo Alves";
var idade = 18;
var idade2 = 10;
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2); //soma de 2 var int.
//alert(idade + idade2); //concatenando string + int.

console.log(nome);
console.log(idade + idade2)
*/

//--------------------------------------------------------

var pais = "Dinamarca";
var frase = " é o melhor time do mundo";

//console.log(pais + frase); //concatena 2 var string
console.log(pais.replace("Dinamarca", "Canadá"));//replace serve para substituir um valor de uma var a outro
console.log(pais.replace("Dinamarca", "Candá") + frase);

//alert(pais.replace("Dinamarca", "Candá") + frase);//pode ser usado o mesmo parametro para o alert
console.log(pais.toUpperCase())//deixa tudo maiuscúlo
console.log(pais.toLowerCase())//deixa tudo minuscúlo

//-----------------------------------------------------
var n1 = 10;
var n2 = 20;

console.log((n1 + n2) /3);//soma aritimetica
console.log(n1*n2);//multiplicação
console.log(n1/n2);//divisão
console.log(n1%n2);//resto
console.log(n1==n2);//igual
console.log(n1>n2);//n1 e maior que n2?
console.log(n1===n2);//
console.log(n1!=n2);//diferente



//---------------------------------------------------