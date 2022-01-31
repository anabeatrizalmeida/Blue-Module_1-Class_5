var prompt  = require(`prompt-sync`)();

let nome = prompt('Digite seu nome: ');
let senha = prompt('Digite a senha de acesso: ');

while ( senha == nome){
    console.log(`Tente novamente`);
    nome = prompt('Digite seu nome: ');
    senha = prompt('Digite a senha de acesso: ');
}
console.log('Logado com sucesso!!');