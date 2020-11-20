//ex: alerta atravez de um butom com alert
/*
function clicou(){
    alert("Obrigado por clicar");
}
*/
//ex fazendo uma finção chamando um id
/*
function clicou(){
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento"));
}
*/

//ex:ingetando html dentro de uma function js gera um texto
/*
function clicou(){
    document.getElementById("agradecimento").innerHTML = 'Obrigado por clicar';

}
*/

//ex:ingetando html dentro de uma function js gerando tags (element.innerHTML = 'texto ou tag em html';)
//direcionar para outra página ()
function clicou(){
    document.getElementById("agradecimento").innerHTML = '<strong>Obrigado por clicar</strong>';
}

function redirecionar(){
    window.open("https://github.com/leo-allves");//esse modo abre o endereço em outra aba
    //window.location.href = "https://github.com/leo-allves"; //abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passaro mouse!";
    //alert("trocar texto"); essa forma comentada e a outra forma
    elemento.innerHTML = "Obrigado por passaro mouse!";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){ //No esxemplo quando usado o body vai chamar essa função
    alert("Página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}