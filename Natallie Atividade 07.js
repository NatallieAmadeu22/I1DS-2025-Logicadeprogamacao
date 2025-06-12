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
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
];
    for (let linha = 0; linha < matriz.length; linha++) {
        for (let coluna = 0; coluna < matriz[0].length; coluna++) {
          linha == coluna &&
            console.log(Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]});
        }
      }
    










    /*
    Dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos por um valor x e que exiba ao usuário a matriz antes e após a multiplicação.