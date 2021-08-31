// A recursão é um método para resolução de problemas
// que consiste em solucionar partes menores do mesmo
// problema até resolvermos o problema original, mais
// amplo. Em geral, ela envolve chamar a própria função.

function recursiveFunction(someParam) {
    recursiveFunction(someParam);
}

function understandRecursion(doIunderstandRecursion) {
    const recursionAnswer = confirm('Do you understand recursion?');
    if (recursionAnswer === true) { // caso de base ou ponto de parada
        return true;
    }
    understandRecursion(recursionAnswer); // chamada recursiva
}