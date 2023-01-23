//Dados do HTML

var textoArea = document.querySelector("#texto-entrada");
var resultado = document.querySelector("#resultado");



var botaoCriptografar = document.querySelector("#btn-encriptar");
var botaoDesencriptografar = document.querySelector("#btn-desencriptar");
var botaoCopia = document.querySelector("#btn-copiar");

//Lógica
//não aceitar números, caracteres especiais e letras com acentos

textoArea.addEventListener("keypress",function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.key);
    if ((keyCode > 47 && keyCode < 58)){
        e.preventDefault();
        alert("Digite somente letras");
       
    }
    if (!verificaCaracter(e)){
        e.preventDefault();
        alert("Digite apenas e sem acentos letras ");
       
    }
});

function verificaCaracter(e){
    const caracter = String.fromCharCode(e.keyCode);
    
    const padrao = '[a-zA-z0-9 ]';
    
    if(caracter.match(padrao)){
        return true;

    }

}//funções dos botões

function criptografar(){
    var texto = textoArea.value;
    var resultado1 = texto.replaceAll("e", "enter");
    var resultado2 = resultado1.replaceAll("i", "imes");
    var resultado3 = resultado2.replaceAll("a", "ai");
    var resultado4 = resultado3.replaceAll("u", "ufat");
    var resultado5 = resultado4.replaceAll("o", "ober");

    resultado.value = resultado5.toLowerCase();
    
}

function desencriptografar(){
    var texto = textoArea.value;
    var resultado1 = texto.replaceAll("enter", "e");
    var resultado2 = resultado1.replaceAll("imes", "i");
    var resultado3 = resultado2.replaceAll("ai", "a");
    var resultado4 = resultado3.replaceAll("ufat", "u");
    var resultado5 = resultado4.replaceAll("ober", "o");

    resultado.value = resultado5.toLowerCase();

}
function limpaTela(){
    textoArea.value = '';
    resultado.value = '';
}
function copiarTexto(){
    
    var textoCopiado = resultado.value;
    navigator.clipboard.writeText(textoCopiado);
    limpaTela();
    input.focus();
}
botaoCriptografar.onclick = criptografar;
botaoDesencriptografar.onclick = desencriptografar;
botaoCopia.onclick = copiarTexto;