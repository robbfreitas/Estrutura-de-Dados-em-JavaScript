// Método includes devolve true caso um elemento seja encontrando no array, e false caso contrário.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers.includes(15)); // True
console.log(numbers.includes(20)); // False

// Passando um índice de início a partir do qual queremos que o Array faça uma pesquisa de valor.

let numbers2 = [7, 6, 5, 4, 3, 2, 1]
console.log(numbers.includes(4,5)); // False. Pois o elemento 5 não existe após a posição 5
console.log(numbers2.includes(4,2)) // True.