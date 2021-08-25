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
        return this.keysValues().map(valuePair => valuePair.key);
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