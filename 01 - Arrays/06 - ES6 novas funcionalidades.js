// Iterando com o laço For...of

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (const n of numbers) {

console.log(n % 2 === 0) ? 'even' : 'odd';
}

// Usando o objeto @@iterator

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5

// Representar todos os 15 valores do Array assim:

iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
    console.log(n);
}

// Métodos entries, keys e values de array. Três formas de obter iteradores de um array

// Método entries devolve @@iterator, que contém pares chave/valor.

let aEntries = numbers.entries(); // obtém um iterador de chave/valor
console.log(aEntries.next().value); // [0, 1] - posição 0, valor 1
console.log(aEntries.next().value); // [1, 2] - posição 1, valor 2
console.log(aEntries.next().value); // [2, 3] - posição 2, valor 3

// Alternativa ao código anterior

aEntries = numbers.entries();
for (const n of aEntries) {
    console.log(n);
}

// Método keys devolve @@iterator, que contém as chaves do array. 

const aKeys = numbers.keys(); // obtém um iterador de chaves

console.log(aKeys.next()); // {value: 0, done: false}
console.log(aKeys.next()); // {value: 1, done: false}
console.log(aKeys.next()); // {value: 2, done: false}
/* Quando não houver + valores p/ iterar, o código aKeys.next() devolverá undefined
como value e done como true. Se done tiver um valor igual a false, isso significa que
ainda há mais chaves p/ iterar no Array. */

// Usando o método from. Cria um outro array a partir de um existente

let numbers2 = Array.from(numbers); // Copiando o array Numbers p/ outro array.

let evens = Array.from(numbers, x => (x % 2 == 0)); // Também é possível passar função p/ determinar quais valores queremos mapear

// Usando o método Array.of. Cria outro array a partir dos argumentos passados p/ o método.

let numbers3 = Array.of(1);
let numbers4 = Array.of(1, 2, 3, 4, 5, 6);
// É o mesmo que executar o código seguinte:
// let numbers3 = [1];
// let numbers4 = [1, 2, 3, 4, 5, 6];

// Usando o mesmo método para fazer cópia de um array existente

let numbersCopy = Array.of(...numbers4);
console.log(numbersCopy);
