// Concat - Juntando vários Arrays

const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers); // [-3, -2, -1, 0, 1, 2, 3]

// Funções de Iteração

function isEven(x) {
    // devolve true se x for múltiplo de 2.
    console.log(x);
    return x % 2 === 0 ? true : false;

}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Iterando com o método Every - itera pelos elementos do Array até que a função devolva false

nums.every(isEven); // 1. Não é múltiplo de 2, isEven devolve False, única vez que a função é executada.

/* Iterando com o método some - representa comportamento oposto ao every, entretanto, some itera pelos elementos
do array até que a função devolva true */

nums.some(isEven); // 1, 2. Primeiro elemento 1 - false e segundo que é 2 - true e a iteração é interrompida

// Iterando com ForEach

nums.forEach( x => console.log(x % 2 === 0)); // Mesmo resultado do For. False, True... True, False.

// Usando Map e Filter

const myMap = nums.map(isEven); 
console.log(myMap[0]); // False. Pq 1 é false, não é par.

const evenNums = nums.filter(isEven);
console.log(evenNums) // Números pares do Array.

/* Usando o método Reduce - Podemos usar essa função p/ devolver um valor que será somado a um acumulador
Reduzir o valores de um Array a um resultado. */

console.log(nums.reduce((previous, current) => previous + current)); // 120. Soma dos números dentro do Array