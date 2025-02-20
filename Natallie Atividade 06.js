/***************************************************************
                   Lista de Exercícios 06
****************************************************************/

//Criar uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem informando se ela pode votar no Brasil.

//Regras para votação no Brasil:
//Menores de 16 anos: Não podem votar.
//Entre 16 e 17 anos ou acima de 70 anos: O voto é facultativo.
//Entre 18 e 70 anos: O voto é obrigatório.

const podeVotar = (idade) => {
    //isso e uma funcao
    if (idade < 16) {
      return "Não pode votar";
    } else if (idade >= 18 && idade < 70) {
      return "Pode votar!";
    } else {
      return "Voto facultativo";
    }
  };
var nome = ["Ygona", "Batata", "Roberson", "jurandir"];
console.log("Olá", nome[0], "Você tem 16 anos e", podeVotar(16));
console.log("Olá", nome[1], "Você tem 22 anos e", podeVotar(22));
console.log("Olá", nome[2], "Você tem 70 anos e", podeVotar(70));
console.log("Olá", nome[3], "Você tem 12 anos e", podeVotar(12));
