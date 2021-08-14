/* Uma fila é uma coleção ordenada de itens baseada em
FIFO (First In First Out) também conhecido como first-
come first-served. A adição de novos elementos em uma
fila é feita na tail e a remoção, na frente. */

// Criando a classe Queue

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    /* Método para adição de novos elementos na fila. Só Podemos adicionar
    novos elementos no final da fila */
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    /* Método para remoção de itens da fila. Princípio FIFO, primeiro adicionado
    será o item a ser removido */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    // Olhando o elemento que está na frente da fila
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    // Verificando se a pilha está vazia e o seu tamanho
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    // Também pode se escrever o método isEmpty assim:
    // isEmpty() {
    //     return this.size() === 0;
    // }
    
    // Limpando a fila
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    // Criando o método toString

    toString() {
        if (this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}

// Usando a classe Queue

const queue = new Queue();
console.log(queue.isEmpty()); // True

// Adicionando elementos na fila

queue.enqueue('Robb');
queue.enqueue('Lucca');
console.log(queue.toString());

// Acrescentando outro elemento

queue.enqueue('Camila');

// Executando outros comandos

console.log(queue.toString()); // Robb, Lucca, Camila
console.log(queue.size()); // Exibe 3
console.log(queue.isEmpty()); // False
queue.dequeue() // Remove Robb
console.log(queue.toString()); // Lucca, Camila
queue.dequeue() // Remove Camila
console.log(queue.toString()); // Camila
console.log(queue.size()); // 1