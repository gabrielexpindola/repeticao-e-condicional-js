// Nivel Basico

// Contagem de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Tabuada de um número
let numero = Number(prompt("Tabuada de um número. Digite um numero:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// Soma dos primeiros N números naturais

let n = Number(prompt("Soma dos primeiros N números naturais. Digite um número N:"));
let soma = 0;
let i = 1;

while (i <= n) {
    soma += i;
    i++;
}

console.log(`A soma dos números de 1 até ${n} é ${soma}`);

// Nivel Intermediário 

// Exibir os números pares de 1 a 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Jogo de Adivinhação



// Contagem Regressiva

// Validação de Senha

// Soma até parar

// Média de valores


// Nível Avançado

// Soma dos dígitos de um número

// Tabuada dinâmica

// Inverter um número

// Maior número digitado

// Lista de nomes (forEach)


//Desafio Extra: Sistema de Pedidos