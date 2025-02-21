/***************************************************************
                   Lista de Exercícios 07
****************************************************************/

/*
Dada a matriz abaixo, faça um programa em JavaScript que exiba ao usuário os elementos da sua diagonal principal com o laço FOR.
|   3  5  8   |
|   1  9  2   |
|   7  1  4   | 
*/

var matriz = [
    [3, 5, 8]
    [1, 9, 2]
    [7, 1, 4]
];
for (let diagonal = 0; diagonal < matriz.length; diagonal++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) (
        console.log(`Matriz[${diagonal}][${coluna}] = ${matriz[diagonal][coluna]}`);
)
  };