var formNome= document.getElementById("formnome");
var nome= document.getElementById("nome");

function pegarNome(){    
    comecarJogo(nome.value);
}

function comecarJogo(nome){
    var inicioJogo = document.getElementById("inicioJogo");
    inicioJogo.style.display = "block";
    var inicio = document.getElementById("inicio");
    inicio.innerHTML = "Seja bem vindo(a) " + nome + ". Você quer jogar?"; 
}

function encerrarJogo(){
    alert("Obrigado pela Visita");
    //verficar outra forma para fechar a Janela, pelo chrome este comando não funciona
    return window.close();
}

function inicioJogo(){
    var totalComida= document.getElementById("totalComida");
    totalComida.style.display= "none"
    var totalMatematica= document.getElementById("totalMatematica");
    totalMatematica.style.display= "none"
    var esconder = document.getElementById("esconderParaJogoComecar");
    esconder.style.display = "none";
    var jogar= document.getElementById ("jogar");
    jogar.style.display= "block";
    
}

function comida(){
    var jogar= document.getElementById ("jogar");
    jogar.style.display= "none";
    var comida = document.getElementById ("comida");
    comida.style.display = "block"


}
function verificarCom (){
    var comida = document.getElementById ("comida");
    comida.style.display = "none"

    var totalComida= document.getElementById("totalComida")
    totalComida.style.display = ""

    var comida1= document.getElementById("comida1");
    comida1= comida1.value;

    var comida2= document.getElementById("comida2");
    comida2= comida2.value;

    var comida3= document.getElementById("comida3");
    comida3= comida3.value;

    if (comida1.toLowerCase() ==="c"){
        var respComida1=  document.getElementById ("respComida1")   
        respComida1.innerHTML= "Resposta 1"   
    }
    else{
            var respComida1E=  document.getElementById ("respComida1E")   
            respComida1E.innerHTML= "Resposta 1"  

    }

    if (comida2.toLowerCase() ==="a"){
        var respComida2=  document.getElementById ("respComida2")   
        respComida2.innerHTML= "Resposta 2"   
    }
    else{
            var respComida2E=  document.getElementById ("respComida2E")   
            respComida2E.innerHTML= "Resposta 2"  

    }

    if (comida3.toLowerCase() ==="b"){
        var respComida3=  document.getElementById ("respComida3")   
        respComida3.innerHTML= "Resposta 3"   
    }
    else{
            var respComida3E=  document.getElementById ("respComida3E")   
            respComida3E.innerHTML= "Resposta 3"  

    }
}


function matematica(){
    var jogar= document.getElementById ("jogar");
    jogar.style.display= "none";
    var matematica = document.getElementById ("matematica");
    matematica.style.display = "block"
}
function verificarMat (){
    var matematica = document.getElementById ("matematica");
    matematica.style.display = "none"

    var totalMatematica= document.getElementById("totalMatematica")
    totalMatematica.style.display = ""

    var matematica1= document.getElementById("matematica1");
    matematica1= matematica1.value;

    var matematica2= document.getElementById("matematica2");
    matematica2= matematica2.value;

    var matematica3= document.getElementById("matematica3");
    matematica3= matematica3.value;

    if (matematica1.toLowerCase() ==="b"){
        var respMatematica1=  document.getElementById ("respMatematica1")   
        respMatematica1.innerHTML= "Resposta 1"   
    }
    else{
            var respMatematica1E=  document.getElementById ("respMatematica1E")   
            respMatematica1E.innerHTML= "Resposta 1"  

    }

    if (matematica2.toLowerCase() ==="b"){
        var respMatematica2=  document.getElementById ("respMatematica2")   
        respMatematica2.innerHTML= "Resposta 2"   
    }
    else{
            var respMatematica2E=  document.getElementById ("respMatematica2E")   
            respMatematica2E.innerHTML= "Resposta 2"  

    }

    if (matematica3.toLowerCase() ==="a"){
        var respMatematica3=  document.getElementById ("respMatematica3")   
        respMatematica3.innerHTML= "Resposta 3"   
    }
    else{
            var respMatematica3E=  document.getElementById ("respMatematica3E")   
            respMatematica3E.innerHTML= "Resposta 3"  

    }

}