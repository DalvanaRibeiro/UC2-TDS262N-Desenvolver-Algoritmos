const prompt = require("prompt-sync")()

let bateria = Number(prompt("Digite a procentagem da bateria: "))
// Se a bateria estiver em 20% ou menos...
if(bateria <= 20){
    console.log(" Procure um carregador!")
}else{ 
    // SENÃO..
    console.log("Bateria de buenas! pq somos poliglotas :)")
}