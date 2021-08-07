class Stack {
    constructor() {
        this.items = [];
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

// Verificando se a pilha está vazia

isEmpty() {
    return this.items.length === 0;
}
// Devolverá true se a pilha estiver vazia(nenhum elemento adicionado), e false caso contrário

// Para coleções, em geral usamos o termo size no lugar de length 

size() {
    return this.items.length;
}

// Limpando os elementos da pilha 

clear() {
    this.items = [];
}

}

// Usando a classe Stack

const stack = new Stack();
console.log(stack.isEmpty()); // True