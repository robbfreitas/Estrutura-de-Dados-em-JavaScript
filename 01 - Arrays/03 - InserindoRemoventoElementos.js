let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Acrescentar um novo elemento no array, é preciso referenciar
a última posição livre do array e atribuir-lhe um valor */
numbers[numbers.length] = 10;
console.log(numbers);

// Usando o método push

numbers.push(11);
console.log(numbers);

// Inserindo um elemento na primeira posição

Array.prototype.insertFirstPosition = function(value) {

    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFirstPosition(-1);

console.log(numbers);

// Usando o método Unshift (mesma lógica de insertFirstPosition)

numbers.unshift(-2);
console.log(numbers);

// Removendo elementos

// Removendo um elemento do final do Array

numbers.pop()
console.log(numbers);
// Os métodos push e pop permitem que um arrat emule uma ED stack básica

// Removendo elemento da primeira posição. Ps: método pedagógico

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}
console.log(numbers); // Apenas reposiciona os elementos no Array. Tamanho permanece e aparece um espaço Undefined

// Usando o método shift para remover o primeiro elemento. Ps: usando em projetos.

numbers.shift();
console.log(numbers);
/* Os métodos shift e unshift permitem que um array emule uma ED básica de fila (queue)*/

// Adicionando e removendo elementos de uma posição específica com Splice()

numbers.splice(5,3)
console.log(numbers);