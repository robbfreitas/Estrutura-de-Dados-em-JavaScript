class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
    }
    // Métodos
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    pop() {
        if (this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if (this.isEmpty) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear() {
        this.items = {};
        this.count = 0;
    }
    /* Também poderiamos usar a lógica a seguir p/ remover todos os elementos da pilha, 
    respeitando o comportamento de LIFO.
    while (!this.isEmpty()) {
        this.pop();
    } */
    // Criando método toString p/ exibir conteúdo semelhante a um array.
    toString() {
        if (this.isEmpty) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(8);
