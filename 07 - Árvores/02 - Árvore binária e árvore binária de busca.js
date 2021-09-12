// Um nó em uma árvore binária tem no máximo dois filhos: um filho
// à esquerda e um filho à direita.

// Uma BST(Binary Search Three, ou árvore binária de busca) é uma
// árvore binária, mas permite armazenar somente nós com valores
// menores do lado esquerdo e nós com valores maiores do lado direito

class Node {
    constructor(key) {
      this.key = key; // valor do nó
      this.left = null; // referência ao nó que é o filho à esquerda
      this.right =  null; // referência ao nó que é o filho à direita
    }
}

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
  };

function defaultCompare(a, b) {
    if (a === b) {
      return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
  }

  class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
      this.compareFn = compareFn;
      this.root = undefined;
    }
  }