const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

numeros.sort((a, b) => a - b);
console.log("\nQuestão 'A'");
console.log("crescente =>", numeros);

console.log("\nQuestão 'B'");
console.log("Decrescente =>", numeros.reverse());

numeros.sort();
console.log("\nQuestão 'C'");
console.log("Unicode => ", numeros);

console.log("\nQuestão 'D");
frutas.sort((a, b) => a.localeCompare(b));
console.log("Crescente => ", frutas);

console.log("\nQuestão 'E'");
frutas.sort((a, b) => b.localeCompare(a));
console.log("Decrescente => ", frutas);

frutas.sort((a, b) => a.length - b.length);
console.log("\nQuestão 'F' =>", frutas);
