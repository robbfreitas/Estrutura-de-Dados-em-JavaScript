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

// Usando o método Fill. Preence um array com um valor.Fill(valor, start, end)

let fillMethod = numbersCopy.fill(0);
console.log(fillMethod); // 0, 0, 0, 0, 0, 0

fillMethod.fill(2, 1);
console.log(fillMethod); // 0, 2, 2, 2, 2, 2

fillMethod.fill(1, 3, 5)
console.log(fillMethod); // 0, 2, 2, 1, 1, 2

// Ótimo para criar um Array e inicializar seus valores. Como:

let ones = Array(6).fill(1);
console.log(ones); // 1, 1, 1, 1, 1, 1

// Usando o método copyWithin. Copia uma sequência de valores do array p/ a posição de um índice de início

let copyArray = [1, 2, 3, 4, 5, 6];

// Vamos copiar os valores 4, 5 e 6 para as primeiras três posições do array "[4, 5, 6, 4, 5, 6]"

copyArray.copyWithin(0, 3);
console.log(copyArray); // 4, 5, 6, 4, 5, 6

copyArray.copyWithin(1, 3, 5); // Valores das posições 3 a 5 para a posição 1 do array
console.log(copyArray) // 4, 4, 5, 4, 5, 6

// Ordenando Elementos

numbers.reverse();
console.log(numbers); // [15, 14, 13... 3, 2, 1]

numbers.sort((a, b) => a - b); // Essa função serve p/ corrigir o erro do sort ordenar os elementos por tabela ASCII
console.log(numbers);

// Ordenação Personalizada 

const friends = [
    { name: "John", age: 30},
    { name: "Ana", age: 20},
    { name: "Chris", age: 25}, // vírgula no final: ES2017
];
function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}
console.log(friends.sort(comparePerson));

// Ordenando Strings

let names = ["Ana", "John", "ana", "john"];
console.log(names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
})) // [ 'Ana', 'Ana', 'John', 'John' ] // Ignora letra maiúscula/minúscula

// Para ordenar primeiro por letra minúscula

let firstLower = names.sort((a, b) => a.localeCompare(b));
console.log(firstLower); // [ 'ana', 'Ana', 'john', 'John' ]

// Pesquisa. indexOf e lastIndexOf

// IndexOf - Devolve o índice do primeiro elemento correspondente ao argumento passado

console.log(numbers.indexOf(10)); // 9
console.log(numbers.indexOf(100)); // -1 pq não existe

// Last index of - Devolve o índice do último elemento encontrado , correspondente ao arg passado

numbers.push(10);
console.log(numbers.lastIndexOf(10)); // 15
console.log(numbers.lastIndexOf(100)); // -1
console.log(numbers)

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multiplieOf13(element, index, array) {
    return (element % 13 == 0);
}


// ECMAScript 2015 - Os métodos find e findIndex

console.log(nums.find(multiplieOf13));
console.log(nums.findIndex(multiplieOf13));