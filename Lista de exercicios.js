/*Lista de Exercícios de Lógica de Programação em JavaScript 

         Variáveis e Operações Matemáticas 

*/

/*1. Declare três variáveis numéricas e exiba no console a soma, subtração, 
multiplicação e divisão entre elas.
*/

let num1 = 10;
let num2 = 5;
let num3 = 2;

let soma = num1 + num2 + num3;
let subtração = num1 - num2 - num3;
let multiplicação = num1 * num2 * num3;
let divisão = num1 / num2 / num3;

console.log("soma:" + soma);
console.log("subtracao:" + subtração);
console.log("multiplicacao:" + multiplicação);
console.log("divisao:" + divisão);

console.log("----------------------------------------------------");

/*1.2- Crie três variáveis representando as notas de um aluno e calcule sua 
média. Se a média for maior ou igual a 7, exiba "Aprovado", senão, 
"Reprovado"
*/
let nota1 = 8.5;
let nota2 = 6.8;
let nota3 = 7.5;
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log("APROVADO");
} else {
  console.log("REPROVADO;");
}
console.log("média do aluno:" + media.toFixed(2));

console.log("---------------------------------------------;");

/* 1.3 -Dado um salário bruto de R$3.000,00, calcule o salário líquido 
considerando um desconto de 8% de INSS e 5% de imposto de renda.
*/
var salarioBruto = 3000;
let descontoINSS = 0.08 * salarioBruto; //8% do INSS
let descontoIR = 0.05 * salarioBruto; //5% de imposto de renda

let salarioLiquido = salarioBruto - descontoINSS - descontoIR;
console.log("Salário Bruto:" + salarioBruto.toFixed(2));
console.log("Desconto de INSS: R$" + descontoINSS.toFixed(2));
console.log("Desconto de impostos de renda: R$" + descontoIR.toFixed(2));
console.log("Salário líquido: R$" + salarioLiquido.toFixed(2));

console.log("--------------------------------------------------");

/*1.4- Considere um círculo com raio de 7cm. Calcule e exiba a circunferência e a 
área do círculo (use Math.PI). 
*/
let raio = 7;
let circunferência = 2 * Math.PI * raio;
let area = Math.PI ** 2;
console.log("Raio do círculo:" + raio + "cm");
console.log("Circuferencia:" + circunferência.toFixed(2) + "cm");
console.log("Area " + area.toFixed(2) + "cm²");

console.log("-------------------------------------------");

/* 1.5- Uma loja de eletrônicos vende celulares a R$1.500,00 cada e oferece 
desconto progressivo: 
- O 5% para compras de 2 unidades;   
*/
const precoUnitario = 1500;
var quantidade = 2;
var descontoPercentual = 0.05;
var totalSemDesconto = precoUnitario * quantidade;
var valorDesconto = totalSemDesconto * descontoPercentual;
var totalcomDesconto = totalSemDesconto - valorDesconto;
console.log("Preço total sem desconto: R$", totalSemDesconto.toFixed(2));
console.log("Desconto de 5%: R$", valorDesconto.toFixed(2));
console.log("Preço total com desconto: R$", totalcomDesconto.toFixed(2));
console.log("-----------------------------------------------------------");

//- O 10% para compras de 3 unidades;
var quantidade = 3;
var descontoPercentual = 0.1;
var totalSemDesconto = precoUnitario * quantidade;
var valorDesconto = totalSemDesconto * descontoPercentual;
var totalcomDesconto = totalSemDesconto - valorDesconto;
console.log("Preço total sem desconto: R$", totalSemDesconto.toFixed(2));
console.log("Desconto de 10%: R$", valorDesconto.toFixed(2));
console.log("Preço total com desconto: R$", totalcomDesconto.toFixed(2));
console.log("-----------------------------------------------------------");

/*- O 15% para compras de 4 ou mais unidades. Exiba o valor final a pagar 
para cada quantidade.
*/
var quantidade = 4;
var descontoPercentual = 0.15;
var totalSemDesconto = precoUnitario * quantidade;
var valorDesconto = totalSemDesconto * descontoPercentual;
var totalcomDesconto = totalSemDesconto - valorDesconto;
console.log("Preço total sem desconto: R$", totalSemDesconto.toFixed(2));
console.log("Desconto de 15%: R$", valorDesconto.toFixed(2));
console.log("Preço total com desconto: R$", totalcomDesconto.toFixed(2));
console.log("-----------------------------------------------------------");

/*2. Estruturas Condicionais (IF, ELSE) 
- Dado um número qualquer, exiba se ele é múltiplo de 3, múltiplo de 5 ou 
múltiplo de ambos.
*/
var num = 10;
console.log(`numero: ${num}`);
if (num % 3 == 0 && num % 5 == 0) {
  console.log(`multiplo de ambos`);
} else if (num % 3 == 0) {
  console.log(`multiplo de 3`);
} else if (num % 5 == 0) {
  console.log(`multiplo de 5`);
}
console.log("------------------------------------------------------------");

/*2.7- Determine se um ano específico (exemplo: 2024) é bissexto (divisível por 4 
e não por 100, exceto se for divisível por 400). 
*/
const verificarAnoBissexto = (ano) => {
  if (ano % 400 === 0) {
    return console.log(`${ano} é bissexto porque é divisivel por 400.`);
  }
  if (ano % 100 === 0) {
    return console.log(
      `${ano} não é bissexto porque é divisivel por 100, mas não por 400.`
    );
  }
  if (ano % 4 === 0) {
    return console.log(
      `${ano} é bissexto porque é divisivel por 4, mas não por 100.`
    );
  }
  return console.log(`${ano} não é bissexto porque é divisivel por 4.`);
};
verificarAnoBissexto(2024);
verificarAnoBissexto(1900);
verificarAnoBissexto(3000);
verificarAnoBissexto(2000);
console.log("-------------------------------------------------------------");

//8.Dado um número de 0 a 6, exiba o dia da semana correspondente (0 =
//Domingo, 1 = Segunda...).
var semana = 2;
switch (semana){
  case 1:
    console.log("Segunda");
    break;
    case 2:
    console.log("terça");
    break;
    case 3:
    console.log("quarta");
    break;
    case 4:
      console.log("quinta");
      break;
      case 5:
        console.log("sexta")
        case 6:
    console.log("sabado");
    break;
    case 0:
      console.log("domingo");
      break;
      default:
        console.log("informe um dia da semana valido");
        break;
}
console.log("--------------------------------------------------------------------------------")
//9.Se um motorista ultrapassar um limite de velocidade de 80km/h, ele será
//multado. Para cada km acima do limite, a multa custa R$5,00. Determine o
//valor da multa para um carro a 95km/h.
var limite = 80;
var velocidade = 95;
var multa = 0;

if(velocidade > limite) {
  multa = (velocidade - limite) * 5;
  console.log(O valor da multa é de R$${multa.toFixed (2)});
}
//.10 Crie um programa que, dado o preço de um produto, aplique um desconto
//conforme a seguinte tabela:
//o Menos de R$50,00: sem desconto.
//o Entre R$50,00 e R$100,00: 5% de desconto.
//o Acima de R$100,00: 10% de desconto.
var valor = 10;
if(valor < 50) {
  console.log(a sua compra de R$ ${valor} nao recebeu descontos);
} else if (valor >= 50 && valor <= 100) {
    console.log(
      `a sua compra de R$ ${valor} recebeu descontos e agora vale ${
        valor - valor * 0.05
      }`
    ) 
  }

console.log("----------------------------------------------------------------------------")


//11.xiba todos os números pares entre 1 e 50.
console.log("Números pares de um a cinquenta");

for (let i = 0; i <= 50; i += 2) {
}

/*3. Laços de Repetição (FOR, WHILE) 
11. Exiba todos os números pares entre 1 e 50.
*/
console.log("Números pares de um a cinquenta");

for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}
console.log(
  "-----------------------------------------------------------------"
);

/*3.12- Exiba a tabuada do número 9 (de 9 × 1 até 9 × 10).
 */
var tabuada = 9;
console.log(tabuada, "x 1 =", tabuada * 1);
console.log(tabuada, "x 2 =", tabuada * 2);
console.log(tabuada, "x 3 =", tabuada * 3);
console.log(tabuada, "x 4 =", tabuada * 4);
console.log(tabuada, "x 5 =", tabuada * 5);
console.log(tabuada, "x 6 =", tabuada * 6);
console.log(tabuada, "x 7 =", tabuada * 7);
console.log(tabuada, "x 8 =", tabuada * 8);
console.log(tabuada, "x 9 =", tabuada * 9);
console.log(tabuada, "x 10 =", tabuada * 10);
console.log("---------------------------------------------------------------");

/*3.13- Some os números de 1 a 100 e exiba o resultado.
 */
var i = 1;
var soma1 = 0;
for (let i = 1; i <= 100; i++) {
  soma1 += i;
}
console.log(soma1);
console.log("---------------------------------------------------");
/*3.14- Dado um array [3, 5, 7, 9, 11], exiba a soma de seus elementos
 */

/* 3.15- Crie um contador regressivo que comece em 10 e exiba cada número até 0.
 */
var i = 10;
while (i >= 0) {
  console.log(`segundos: $(i)`);
  i--;
}
console.log("---------------------------------------------------");
/*16. Crie um array com os dias da semana e exiba a quarta-feira
 */
var dias = [
  `Domingo`,
  `Segunda`,
  `Terça`,
  `Quarta`,
  `Quinta`,
  `Sexta`,
  `Sábado`,
];
console.log(dias[3]);
console.log(`2 posicao:`, dias[3]);
console.log("--------------------------------------------------------");

/*3.17- Crie um array com cinco frutas e remova a terceira fruta da lista.
 */
var frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];
console.table(frutas);
var posicao = frutas.indexOf("Pera");
frutas.slice(posicao, 1);
console.table(frutas);
console.log(
  "----------------------------------------------------------------------"
);
/*18. Crie um array de números e exiba apenas os números maiores que 10.
 */
var numeros = [12, 7, 20, 15, 39];
console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[4]);
console.log("-------------------------------------------------");
/*19.

*/
var texto1 = "Java Script é incrivel!";
console.log(texto1);
var texto2 = "Java Script é INCRIVEL";
console.log(texto2);

var limite = 80;
var velocidade = 95;
var multa = 0;

if(velocidade > limite) {
  multa = (velocidade - limite) * 5;
  console.log(O valor da multa é de R$${multa.toFixed(2)});
};
