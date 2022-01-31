var prompt  = require(`prompt-sync`)();

let num = prompt('Digite um número par: '); ;

while (num%2 != 0) {
    num = prompt('Digite um número par: ');
}