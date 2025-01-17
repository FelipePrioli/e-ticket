let pista = 100
let cadeiraSuperior = 200
let cadeiraInferior = 400

let listaPista = document.getElementById('qtd-pista')
let listaSuperior = document.getElementById('qtd-superior')
let listaInferior = document.getElementById('qtd-inferior')

function comprar(){
    //pegar os valores
    let tipoDoIngresso = document.getElementById('tipo-ingresso').value
    console.log(tipoDoIngresso)
    let quantidade = document.getElementById('qtd').value
    console.log(quantidade)

    if(quantidade < 0){
        alert("Erro 904 - Forneça um numero positivio")
        quantidade = ''
    }

    if(tipoDoIngresso == "pista" && quantidade < pista){
        pista = pista - quantidade
        document.getElementById('qtd-pista').innerText = pista
    }else if(tipoDoIngresso == "pista" && quantidade > pista){
        alert('A quantidade de ingressos que você deseja comprar não está disponível')
    }

    if(tipoDoIngresso == "superior" && quantidade < cadeiraSuperior){

         cadeiraSuperior = cadeiraSuperior - quantidade
         document.getElementById('qtd-superior').innerText = cadeiraSuperior

    }else if (tipoDoIngresso == "superior" && quantidade > cadeiraSuperior){

         alert('A quantidade de ingressos que você deseja comprar não está disponível')
     }

    if(tipoDoIngresso == "inferior" && quantidade < cadeiraInferior){

        cadeiraInferior = cadeiraInferior - quantidade
        document.getElementById('qtd-inferior').innerText = cadeiraInferior

   }else if (tipoDoIngresso == "inferior" && quantidade > cadeiraInferior){

        alert('A quantidade de ingressos que você deseja comprar não está disponível')
    }

}