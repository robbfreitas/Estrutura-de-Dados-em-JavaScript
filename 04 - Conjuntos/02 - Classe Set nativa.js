// A ES2015 introduziu a classe Set como parte da API JS.

const set = new Set();
set.add(1);
console.log(set.values()); // [Set Iterator] { 1 }
console.log(set.has(1)); // True
console.log(set.size); // 1
set.delete(1);
console.log(set.values()) // [Set Iterator] {  }

// Operações com a classe Set da ES2015

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

// Simulando a operação de união

const union = (set1, set2) => {
    const unionAb = new Set();
    set1.forEach(value => unionAb.add(value));
    set2.forEach(value => unionAb.add(value));
    return unionAb;
};

console.log(union(setA, setB));

// Simulando a operação de intersecção

const intersection = (set1, set2) => {
    const intersectionSet = new Set();
    set1.forEach(value => {
        if (set2.has(value)) {
            intersectionSet.add(value);
        }
    });
    return intersectionSet;
};

console.log(intersection(setA, setB)); // 2, 3

// Simulando a operação de diferença

const difference = (set1, set2) => {
    const differenceSet = new Set();
    set1.forEach(value => {
        if (!set2.has(value)) {
            differenceSet.add(value);
        }
    });
    return differenceSet;
};

console.log(difference(setA, setB)); // 1