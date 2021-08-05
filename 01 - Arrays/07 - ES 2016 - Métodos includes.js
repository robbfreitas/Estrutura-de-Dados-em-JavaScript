// Método includes devolve true caso um elemento seja encontrando no array, e false caso contrário.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers.includes(15)); // True
console.log(numbers.includes(20)); // False

// Passando um índice de início a partir do qual queremos que o Array faça uma pesquisa de valor.

let numbers2 = [7, 6, 5, 4, 3, 2, 1]
console.log(numbers.includes(4,5)); // False. Pois o elemento 5 não existe após a posição 5
console.log(numbers2.includes(4,2)) // True.

// Convertendo um array em uma string. toString e join.

// toString - Exibir todos os elementos do array em uma única string

console.log(numbers.toString()); // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

// join - Separar os elementos com um separador diferente. Ex: -.

const numbersString = numbers.join('-');
console.log(numbersString);
/* Pode ser útil se for necessário enviar o conteúdo do array p/ um servidor ou se esse conteúdo
tiver de ser decodificado (conhecendo o separador, a decodificação será mais fácil) */

// Class TypedArray - Arrays contendo um único tipo de dado

let length = 5;
let int16 = new Int16Array(length);
let array16 = [];
array16.length = length;
for (let i = 0; i < length; i++){
    int16[i] = i + 1;
}

console.log(int16);

// Array em TypeScript

// interface Person {
//     name: string;
//     age: number;
// }

// // const friends: {name: string, age: number} [];
// const friends = [
//     {name: "John", age: 30},
//     {name: "Ana", age: 30},
//     {name: "Chris", age: 25}
// ];
// function comparePerson(a: Person, b: Person) {
//     // conteúdo da função comparePerson
// }