//Lista de exercicio 03

// 1. Crie um array de frutas com os seguintes elementos: Banana, maça, pera, uva, morango.
var frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];
console.table(frutas);

// 2. Adicione Tangerina no final
frutas.push("Tangerina");
console.table(frutas);

// 3. Adicione Goiaba no começo
frutas.unshift("Goiaba");
console.table(frutas);

// 4. Exiba o conteudo do indice 5
console.log(frutas[5]);

// 5. Exclua o elemento Uva
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);

// 6. Crie uma copia do array apenas com os elmentos com indices 2, 3 e 4
var copia = frutas.slice(2, 5);
console.table(copia);
