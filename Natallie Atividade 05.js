/***************************************************************
                Lista de Exercícios 05
****************************************************************/
//1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idade.
function nascimento(nome, ano) {
  let idade = 2025 - ano;
  console.log("A", nome, "nasceu no ano", ano, "e tem", idade, "anos");
}
nascimento("Natallie", "2007");

//2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o veículo faz uma média de 12 Kms/L.
const combustível = (litros) => {
  return litros * 12;
};
var car1 = 20;
var car2 = 8;
var car3 = 2;
console.log("Carro 1: 20L", car1, "->", combustível(car1), "kms.");
console.log("Carro 1: 20L", car2, "->", combustível(car2), "kms.");
console.log("Carro 1: 20L", car3, "->", combustível(car3), "kms.");