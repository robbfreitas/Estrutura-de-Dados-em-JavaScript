/* Estrutura de dados Conjuntos (sets), também é uma estrutura
de dados sequencial, porém não permite valores duplicados. */

// Estruturando um conjunto de dados.
/* Um conjunto (set) é uma coleção não ordenada de itens,
composta de elementos únicos. Usa o mesmo conceito matemático
dos conjuntos finitos, porém aplicado a uma estrutura de dados
em ciência da computação. */

// Criando uma classe Set.

class Set {
    constructor() {
        this.items = {};
    }
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
         /* O protótipo de Object tem o método hasOwnProperty, que devolve um
    booleano informando se o objeto tem a propriedade especificada diretamente
    no objeto ou não, enquanto o operador in devolve um booleano informando se
    o objeto tem a propriedade especificada na cadeia do objeto. */
    }
   add(element) {
    if(!this.has(element)) {
        this.items[element] = element;
        return true;
    }
    return false;
    /* Dado um elemet, podemos verificar se ele já está no conjunto. Se não estiver,
    adicionaremos element ao conjunto e devolveremos true para informar que ele foi
    adicionado. Se o elemento já estiver no conjunto, devolveremos false para informar
    que ele não foi adicionado. */
   }
   delete(element) {
       if (this.has(element)) {
           delete this.items[element];
           return true;
       }
       return false;
   }
   clear() {
       this.items = {};
   }
   size() {
       return Object.keys(this.items).length
   }
   sizeLegacy() {
       let count = 0;
       for (let key in this.items) {
           if(this.items.hasOwnProperty(key)) {
               count++;
           }
       }
       return count;
   }
   values() {
       return Object.values(this.items);
   }
   valuesLegacy() {
       let values = [];
       for (let key in this.items) {
           if(this.items.hasOwnProperty(key)) {
               values.push(key);
           }
       }
       return values;
   }
}

// Usando a classe Set

const set = new Set();
set.add(1);
console.log(set.values()); // Exibe [ 1 ]
console.log(set.has(1)); // Exibe True
console.log(set.size()); // Exibe 1
set.add(2);
console.log(set.values()); // Exibe [ 1, 2 ]
console.log(set.has(2)); // True
console.log(set.size()); // Exibe 2
set.delete(1);
console.log(set.values()); // exibe [ 2 ]
set.delete(2);
console.log(set.values()); // []

// Operação em conjuntos

/* União: dados dois conjuntos, devolve um novo conjunto com elementos
dos dois conjuntos especificados.
   Intersecção: dados dois conjuntos, devolve um novo conjunto com os
elementos presentes em ambos os conjuntos.
   Diferença: dados dois conjuntos, devolve um novo conjunto com todos
os elementos presentes no primeiro conjunto, porém não no segundo.
   Subconjunto: confirma se um dado conjunto é um subconjunto de outro.
*/