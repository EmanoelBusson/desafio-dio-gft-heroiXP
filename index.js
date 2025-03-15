let heroiNome;
let XP;
let nivel;
heroiNome = "Reyna";
XP = 10001;

if (XP <= 1.000){
    nivel= "Ferro";
}else if(XP >= 1001 && XP <=2000) {
   nivel= "Bronze";
}else if(XP>= 2.001 && XP <=6000){
    nivel= "Prata";
}else if(XP>= 6000 && XP <=7000){
    nivel= "Ouro";
}else if(XP>= 7001 && XP <= 8000){
    nivel= "Platina";
}else if(XP>= 8001 && XP <= 9000){
    nivel= "Ascendente";
}else if(XP >= 9001 && XP <= 10000){
    nivel= "Imortal";
}else{
    nivel= "Radiante";
}

console.log(`O heroi de nome ${heroiNome} está no nível de ${nivel}.`);