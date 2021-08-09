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

// Adicionando alguns elementos a pilha.
stack.push(5);
stack.push(8);

// Se chamarmos o método peek, o nº 8 será devolvido.

console.log(stack.peek()); // 8. Peek devolve o elemento que está no topo da pilha.

// Vamos adicionar outro elemento.

stack.push(11);
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // False

// Acrescentando outro elemento.

stack.push(15)

// Vamos remover dois elementos da pilha com pop.

stack.pop();
stack.pop();
console.log(stack.size()); // 2