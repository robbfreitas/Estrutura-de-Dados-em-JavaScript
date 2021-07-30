// Acessando elementos e fazendo uma iteração em um array

let alunos = ["Roberto", "Freitas", "Melo"];

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

// Descobrir os 20 primeiros números da sequência de Fibonacci

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1; 

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}