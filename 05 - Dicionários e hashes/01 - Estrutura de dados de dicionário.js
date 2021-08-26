/* Um dicionário é usado para armazenar pares [chave, valor],
em que a chave pode ser usada para encontrar um elemento em
particular. Também é conhecido como mapa (map), tabela de 
símbolos e array associativo. Em ciência da computação são,
frequentemente, usados para armazenar endereços de referência
de objetos.*/

function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // Verificando se uma chave está presente no dicionário
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    // Definindo uma chave e um valor no dicionário, e a classe ValuePair
    set(key, value) {
        if(key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    // Removendo um valor no dicionário
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    // Obtendo um valor do dicionário
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
        // Segunda opção:
    // get(key) {
    //     if (this.hasKey(key)) {
    //         return this.table[this.toStrFn(key)];
    //     }
    //     return undefined;
    // }
    }

    // Métodos keys, values e valuePairs
    keyValues() {
        return Object.values(this.table);
    }

    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    // Iterando pelos ValuePairs do dicionário com forEach
    forEach(callbackFn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }
    // Métodos clear, size, isEmpty e toString
    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }
    
    clear() {
        this.table = [];
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const valuePairs = this.keysValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }
}

// Usando a classe Dictionary

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.hasKey('Gandalf')); // True
console.log(dictionary.size()); // 3
console.log(dictionary.keys()); // [ 'Gandalf', 'John', 'Tyrion' ]
console.log(dictionary.values()); // [ 'gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com' ]
console.log(dictionary.get('Tyrion')) // tyrion@email.com
dictionary.remove('John');
console.log(dictionary.keys()); // [ 'Gandalf', 'Tyrion' ]
console.log(dictionary.values()); // [ 'gandalf@email.com', 'tyrion@email.com' ]
console.log(dictionary.keyValues()); // ValuePair { key: 'Gandalf', value: 'gandalf@email.com' },
                                     // ValuePair { key: 'Tyrion', value: 'tyrion@email.com' }
dictionary.forEach((k,v) => {
    console.log('forEach: ', `key: ${k}, value: ${v}`); 
});
// forEach:  key: Gandalf, value: gandalf@email.com
// forEach:  key: Tyrion, value: tyrion@email.com
