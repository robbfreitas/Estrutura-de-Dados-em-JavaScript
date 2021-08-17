/* A lista duplamente ligada permite que seja percorrida
em duas direções, direita e esquerda, diferentemente da lista
ligada simples, que permite que seja percorrido em apenas uma
direção. Na lista duplamente ligada, cada elemento possui uma
referência para o próximo elemento e para o elemento anterior,
se esse elemento estiver disponível. Assim, podemos viajar para
trás e para frente de cada elemento da lista. */


/* Para criar a lista, é necessário uma classe principal chamada
lista duplamente encadeada ou ligada e uma classe para servir de
apoio, evitando reescrever código, chamada Node. A lista terá um
contador, que começará em 0 e, também, uma cabeça(head) e uma
cauda (tail), que inicialmente terão o valor null */

class ListaDuplamenteEncadeada {
    constructor(head = null, tail = null, count = 0) {
        this.head = head;
        this.tail = tail;
        this.count = count;
    }
    // Métodos getHead, getTail e getCount
    getHead() {
        if (this.head) {
            return this.head.data;
        }
        return null;
    }
    getTail() {
        if (this.tail) {
            return this.data.tail;
        }
        return null;
    }
    getCount() {
        return this.count;
    }

    // Métodos

    MostrarTudo(){
        if (this.head){
            let arr = [];
            let current = this.head;
            for (let i = 0; i < this.count; i++){
                arr[i] = current.data;
                current = current.next;
            }
            return arr;
        } else {
            return null;
        }
    }
    
    MostrarFimInicio() {
        if (this.head) {
            let arr = [];
            let current = this.tail;
            for (let i = 0; i < this.count; i++) {
                arr[i] = current.data;
                current = current.previous;
            }
            return arr;
        } else {
            return null;
        }
    }

    VisualizarEm(index) {
        if (index > -1 && index < this.count) {
            let current = this.head;
            let i = 0;

            while (i++ < index) {
                current = current.next;
            }

            return current.data;
        } else {
            return null;
        }
    }

    AdicionarInicio(data) {
        let no = new Node(data);
        no.next = this.head;

        this.head = no;

        if (this.count === 0) {
            this.tail = this.head;
        } else {
            this.head.next.previous = this.head;
        }
        this.count++;
    }

    AdicionarFinal(data) {
        let no = new Node(data);
        no.previous = this.tail;

        if (this.count === 0) {
            this.head = no;
        } else {
            this.tail.next = no;
        }
        this.tail = no;
        this.count++;
    }
    
    AdicionarEm(data, index) {
        if (index > 0 && index < this.count) {
            let no = new Node(data);
            let current = this.head;
            let i = 0;

            while(i++ < index) {
                current = current.next;
            }

            current.previous.next = no;
            no.next = current;
            no.previous = current.previous;
            current.previous = no;

            this.count++;
        } else if (index < 1) {
            this.AdicionarInicio(data);
        } else {
            this.AdicionarFinal(data);
        }
    }

    RemoverInicio() {
        if (this.head) {
            this.head = this.head.next;
            this.count--;

            if (this.count === 0) {
                this.tail = null;
            } else {
                this.head.previous = null;
            }
        }
    }

    RemoverFinal() {
        if(this.head) {
            if(this.count === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail.previous.next = null;
                this.tail = this.tail.previous;
            }

            this.count--;
        }
    }

    RemoverEm(index){
        if (index > 0 && index < this.count-1){
    
            let current = this.head;
            let i = 0;
    
            while( i++ < index){
                current = current.next;
            }
    
            current.previous.next = current.next;
            current.next.previous = current.previous;
    
            this.count--;
        } else if (index < 1){
            this.RemoverInicio();
        } else {
            this.RemoverFinal();
        }
    }
}

class Node {
    constructor(data, next = null, previous = null) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

let lista = new ListaDuplamenteEncadeada();
lista.AdicionarInicio(1);
lista.AdicionarInicio(4);
lista.AdicionarInicio(5);
lista.AdicionarInicio(6);
lista.AdicionarFinal(2);
lista.AdicionarEm(3, 1);
console.log(lista.MostrarTudo()); // [ 6, 3, 5, 4, 1, 2 ]
console.log(lista.VisualizarEm(1)); // 3
console.log(lista.MostrarFimInicio()); // [ 2, 1, 4, 5, 3, 6 ]
lista.RemoverEm(1);
console.log(lista.MostrarTudo()); // [ 6, 5, 4, 1, 2 ]
lista.RemoverInicio();
console.log(lista.MostrarTudo()); // [ 5, 4, 1, 2 ]
lista.RemoverFinal();
console.log(lista.MostrarTudo()); // [ 5, 4, 1 ]




// Referência:
//https://www.mundojs.com.br/2020/07/13/estrutura-de-dados-e-classes-javascript-lista-duplamente-encadeada/