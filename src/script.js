# 1️⃣ Desafio Classificador de nível de Herói

let personagem = "Zeca Machadinho"
let experiencia = 1005
let nivelXp = ""


if (experiencia <= 1000){
  nivelXp = "Ferro"

} else if (experiencia >= 1001 && experiencia <= 2000){
  nivelXp = "Bronze"
 
} else if (experiencia >= 2001 && experiencia <= 5000){
    nivelXp = "Prata"

} else if (experiencia >= 5001 && experiencia <= 7000){
    nivelXp = "Ouro"

} else if (experiencia >= 7001 && experiencia <= 8000){
    nivelXp = "Platina"

} else if (experiencia >= 8001 && experiencia <= 9000){
    nivelXp = "Ascendente"

} else if (experiencia >= 9001 && experiencia <= 10000){
    nivelXp = "Imortal"
 
} else (experiencia >= 10001){
    nivelXp = "Radiante"
}
   
console.log("Seu nível, " + personagem + ", é: " + nivelXp);