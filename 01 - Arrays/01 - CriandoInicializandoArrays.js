// Array é a estrutura de dados mais simples possível em memória.

let daysOfWeek = new Array(); // Inicializando um Array
daysOfWeek = new Array(7); // Tamanho do Array - Length
daysOfWeek = new Array("Sunday", "Monday", "Tueday", "Wednesday",
"Thursday", "Friday", "Saturday"); // Inicializando e inserindo elementos no Array

// A melhor prática não é utilizando "New" e sim []

let dias = []; // Melhor prática de se criar um Array

let diasDaSemana = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
console.log(diasDaSemana);