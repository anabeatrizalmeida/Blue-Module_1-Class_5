var prompt  = require(`prompt-sync`)();


const num = Math.floor(Math.random() * 11);

let chute = -1;
let palpites = 1;

while (chute != num){
    let chute = parseInt(prompt("Digite seu chute: "));
    if (num > chute){
        console.log(`maior`);
    } else if (num < chute) {
        console.log(`menor`);
    } else {
        console.log(`Venceu`);
        break;
    }
    palpites ++;
}
console.log(palpites);