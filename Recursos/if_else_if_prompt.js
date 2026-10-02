const prompt = require("prompt-sync")()

let nota = Number(prompt("Digite sua nota: "))

// Primeira decisão
if(nota >= 7){
    console.log("Aprovada!")
} else if(nota >= 5){
    // Se não passou na primeira condição, verificamos uma SEGUNDA condição
    console.log("Recuperação!")
}else{
    // Se nenhuma condição anterior for verdadeira ...
    console.log( "Reprovado!")
}