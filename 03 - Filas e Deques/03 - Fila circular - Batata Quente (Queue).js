/* Um exemplo de fila circular é o jogo da batata. Nesse jogo, as pessoas
se organizam em um círculo e passam a batata quente para o seu vizinho o
mais rápido possível. Em um determinado ponto do jogo, a batata quente para
de ser passada e a pessoa que estiver com a batata quente em mãos é eliminada. */

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

function hotPotato(elementList, num) {
    const queue = new Queue();
    const elimitatedList = [];
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }
    return {
        elimitated: elimitatedList,
        winner: queue.dequeue()
    };
}

const names = ['Robb', 'Lucca', 'Camila'];
const result = hotPotato(names, 1);
result.elimitated.forEach(name => {
    console.log(`${name} foi eliminado do jogo da batata.`);
});
console.log(`O vencedor é: ${result.winner}`);