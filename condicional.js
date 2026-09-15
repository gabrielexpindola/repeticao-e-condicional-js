// Nível Básico

// Verificar maioridade

let idade = Number(prompt("Digite sua idade: "));

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// Verificar se um número é positivo ou negativo

let numero = Number(prompt("Digite um número: "));

if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
}

// Aprovação de uma prova

let nota = Number(prompt("Digite a nota da prova: "));

if (nota >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Verificar se um número é positivo, negativo ou zero

let numero2 = Number(prompt("Digite um número: "));

if (numero2 > 0) {
    console.log("O número é positivo");
} else if (numero2 < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero");
}

// Classificação da Idade

let idade2 = Number(prompt("Digite sua idade: "));

if (idade2 >= 0 && idade2 <= 12) {
    console.log("Você é criança");
} 
if (idade2 >= 13 && idade2 <= 17) {
    console.log("Você é adolescente");
} else if (idadec >= 18) {
    console.log("Você é adulto");
}
else {
    console.log("Idade inválida");
}

// Verificar se um número é par ou impar

let numero3 = Number(prompt("Digite o número a ser verificado: "));

if (numero3 % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}


// Nível Intermediário

// Calculadora Simples

let numerocalculadora1 = Number(prompt("Digite o primeiro número: "));
let numerocalculadora2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação (+, -, *, /): ");

let resultado;

if (operacao === "+") {
    resultado = numerocalculadora1 + numerocalculadora2;
} else if (operacao === "-") {
    resultado = numerocalculadora1 - numerocalculadora2;
} else if (operacao === "*") {
    resultado = numerocalculadora1 * numerocalculadora2;
} else if (operacao === "/") {
    resultado = numerocalculadora1 / numerocalculadora2;
} else {
    console.log("Operação inválida.");
}

// Maior entre três numeros


let numeroescolha1 = Number(prompt("Digite o primeiro número: "));
let numeroescolha2 = Number(prompt("Digite o segundo número: "));
let numeroescolha3 = Number(prompt("Digite o terceiro número: "));

if (numeroescolha1 > numeroescolha2 && numeroescolha1 > numeroescolha3)
{
    console.log(`Maior número escolhido é o primeiro número: ${numeroescolha1}`);
}
if (numeroescolha2 > numeroescolha1 && numeroescolha2 > numeroescolha3) {
    console.log(`Maior número escolhido é o segundo número: ${numeroescolha2}`);
}
if (numeroescolha3 > numeroescolha1 && numeroescolha3 > numeroescolha2) {
    console.log(`Maior número escolhido é o terceiro número: ${numeroescolha3}`);
}
else {
    console.log("Nenhum dos números é maior que o outro.");
}
// Desconto em compras



// Sistema de login simples

let usuario = prompt("Digite o nome de usuário: ");
let senha = Number(prompt("Digite a senha: "));

if(usuario == "admin" && senha == 1234) {
    console.log("Login bem-sucedido.")
} else {
    console.log("Acesso negado.")
}

// Nível Avançado

// Frete de pedido

// Acesso por idade e convite

let idadeacesso = Number(prompt("Digite sua idade: "));
let temconvite = prompt("Possui convite? (sim / não)");

if (idadeacesso >= 18 || temconvite == "sim") {
    console.log("Pode entrar");
}
else {
    console.log("Barrado");
}


// Conversão de notas pra conceitos

let notaconceito = Number(prompt("Insira a nota: "));

if (notaconceito >= 90 && notaconceito <= 100) {
    console.log("A");
}
if (notaconceito >= 80 && notaconceito <= 89) {
    console.log("B");
}
if (notaconceito >= 70 && notaconceito <= 79) {
    console.log("C");
}
if (notaconceito >= 60 && notaconceito <= 69) {
    console.log("D");
}
if (notaconceito < 60) {
    console.log("F");
}
else {
    console.log("Nota inválida")
}

// Cálculo de IMC

// Verificação de Estoque
