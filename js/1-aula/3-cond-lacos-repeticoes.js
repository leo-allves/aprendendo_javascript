//Exercicio para perguntar algo e receber essa resposta na variavel *
/*
var idade = prompt("Qual sua idade?");//exibe uma pergunta
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

//LAÇOS DE REPETIÇÃO
/*
var count = 0;
while (count < 5) {
    console.log(count);
    count = count + 1; //ou count = count++; e a mesma coisa
}
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

//DATE
var data = new Date();
alert(data);
alert(data.getMonth()+1);//tras o mês
alert(data.getMinutes());//trtas os minutos
alert(data.getDay());//trtas o dia
alert(data.getHours());//trtas as horas
