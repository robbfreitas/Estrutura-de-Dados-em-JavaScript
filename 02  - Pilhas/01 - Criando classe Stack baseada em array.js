class Stack {
    constructor() {
        this.items = [];
    }
}

// Push de elementos na pilha, adicionando elementos ao final. Princípio LIFO.

push(element) {
    this.items.push(element);
}

// Pop de elementos da pilha, removendo elementos do final. Princípio LIFO.

pop(element) {
    this.items.pop(element);
}

// Olhando o que está no topo da pilha

peek() {
    return this.items[this.items.length - 1];
}