/* Infelizmente, as propriedades items e count que declaramos
na classe Stack não estão protegidas, e esse comportamento se
deve ao modo como as classes funcionam em JavaScript. */
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
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);
/* Veremos count e items como saídas. Isso significa que as variáveis count e items
são públicas, pois podemos acessá-las facilmente, como em console.log(stack.items) */

// Convenção de nomenclatura com underscore

/* Alguns devs preferem usar a convenção de nomenclatura com underscore
para marcar um atributo como private em JavaScript. Apenas convenção, não
protege os dados e depende do bom senso do dev que usará o nosso código */ 

class Pilha{
    constructor(){
        this._count = 0;
        this._items = {};
    }
}

// Classes ES2015 com símbolos no escopo

/* ES2015 introduziu um novo tipo primitivo chamado Symbol que é imutável
e pode ser usado como propriedade de um objeto.

Essa abordagem oferece uma propriedade private falsa para a classe, pois
o método Object.getOwnPropertySymbols também foi introduzido na ES6 e pode
ser usado para obter todos os símbolos de propriedades declaradas na classe*/

const _items = Symbol('stackItems'); // variável _items como um Symbol
class Stack1{
    constructor() {
        this[_items] = []; // valor inicializado no constructor
    }
    // Métodos de Stack1

}

const stack2 = new Stack();
stack2.push(5);
stack2.push(8);
let objectSymbols = Object.getOwnPropertySymbols(stack2);
console.log(objectSymbols.length); // Exibe 1
console.log(objectSymbols); // [Symbol()]
console.log(objectSymbols[0]) // Symbol()
stack2[objectSymbols[0]].push(1);
stack2.print(); // Exibe 5, 8, 1.

// WeakMap tipo de dado usado para garantir que a propriedade seja private em uma classe.

const items = new WeakMap();
class Stack {
    constructor(){
        items.set(this, []);
    }
    push(element) {
        s = items.get(this);
        s.push(element);
    }
    pop() {
        const s = items.get(this);
        const r = s.pop();
        return r;
    }
    // Outros métodos
}

/* Agora a propriedade items é realmente privada na classe Stack e sabemos.
Com essa abordagem o código não fica fácil de ler e não será possível herdar
as propriedades que são private se estendermos essa classe. */