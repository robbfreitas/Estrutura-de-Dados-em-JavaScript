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
   union(otherSet) {
    const unionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
    }
    values = otherSet.values();
    for( let i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
    }
    return unionSet;
    }
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    /* Aperfeiçoando o método intersection. Do modo anterior precisa iterar por todos os
    elementos que existem no conjunto. A forma a seguir itera pelo conjunto com menos 
    elementos. */
    // intersection(otherSet) {
    //     const intersectionSet = new Set();
    //     const values = this.values();
    //     const otherSet = otherSet.values();
    //     let biggerSet = values;
    //     let smallerSet = otherValues;
    //     if (otherValues.length - values.length > 0) {
    //         biggerSet = otherValues;
    //         smallerSet = values;
    //     }
    //     smallerSet.forEach(value => {
    //         if (biggerSet.includes(value)) {
    //             intersectionSet.add(value);
    //         }
    //     });
    //     return intersectionSet
    // }

    // Diferença de conjuntos
    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if(!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
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

// União

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
const unionAB = setA.union(setB);
console.log(unionAB.values()); // [ 1, 2, 3, 4, 5, 6 ]

// Intersecção

const setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);
setC.add(4);
const setD = new Set();
setD.add(3);
setD.add(4);
setD.add(5);
setD.add(6);
const intersectionCD = setC.intersection(setD);
console.log(intersectionCD.values()); // [ 3, 4 ] - valores comuns a setC e setD

// Diferença entre conjuntos

const setE = new Set();
setE.add(1);
setE.add(2);
setE.add(3);
const setF = new Set();
setF.add(2);
setF.add(3);
setF.add(4);
const diferrenceEF = setE.difference(setF);
console.log(diferrenceEF.values()); // 1 - Pois 1 está em setE mas não está em setF