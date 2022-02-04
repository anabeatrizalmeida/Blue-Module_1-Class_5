var prompt  = require(`prompt-sync`)();

let nome = prompt('Digite seu nome: ').trim().toLowerCase();
while (nome.length < 3){
    console.log(`opcao invalida`);
    nome = prompt('Digite seu nome: ').trim().toLowerCase();
}
console.log(nome);

let idade = +prompt('Digite sua idade: ');
while (idade < 0 || idade > 150){
    console.log(`opcao invalida`);
    idade = +prompt('Digite sua idade: ');
}
console.log(idade);

let salario = +prompt('Digite seu salário: ');
while (salario < 0){
    console.log(`opcao invalida`);
    salario = +prompt('Digite seu salario: ');
}
console.log(salario);

let estadoCivil = prompt('Digite seu estado civil: ').trim().toLowerCase();
const lista = [`s`, `c`, `v`, `d`];
while (lista.indexOf(estadoCivil) == -1){
    console.log(`opcao invalida`);
    estadoCivil = prompt('Digite seu estado civil: ').trim().toLowerCase();
}
console.log(estadoCivil);