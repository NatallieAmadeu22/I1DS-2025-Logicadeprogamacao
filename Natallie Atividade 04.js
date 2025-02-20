/********************************************************************
 *                      Exercicios Vetor Matriz
 *******************************************************************/

//1. Crie e imprima um vetor com 5 elementos númericos
var vetor = [1, 2, 3, 4, 5];
console.table(vetor);

//2. Imprima na tela o 3° elemento do vetor;
console.log(vetor[3]);

//3. Faça uma cópia do vetor original;
var copia = vetor.slice();
console.table(copia);

//4. Altere o conteúdo do vetor cópia para que seus valores sejam o dobro dos valores do vetor original;
copia[0] = vetor[0] * 2
copia[1] = vetor[1] * 2
copia[2] = vetor[2] * 2
copia[3] = vetor[3] * 2
copia[4] = vetor[4] * 2
copia[5] = vetor[5] * 2
console.table(copia);

//5. Crie uma matriz 3x3;
var matriz = [ 
    [9, 0, 1],
    [7, 1, 2],
    [1, 3, 9],
];
console.table(matriz);

//6. Imprima os valores da diagonal principal;
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
