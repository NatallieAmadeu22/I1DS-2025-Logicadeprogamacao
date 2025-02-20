/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/

let nome = "Millene";
let banco = "Inter";
let agencia = "0001";
let conta = "22112007";
let saldo = "100.000,00";
console.log("*********************", banco, "******************************");
console.log("Cliente:", nome);
console.log("Agencia:", agencia, "|Conta:", conta);
console.log("Seu saldo é de R$", saldo);

console.log("    + Depósito: R$ 1000,00");
saldo = saldo + 1.0;

console.log("    - Saque: R$ 800,00");
saldo = saldo - 800;

console.log("    - Saque: R$ 2.000,00");
saldo = saldo - 2.0;

console.log("    + Depósito: R$ 5.000,00");
saldo = saldo + 5000;

console.log("    - Saque: R$ 90,00");
saldo = saldo - 90; // mesma coisa que > saldo = saldo + 90

console.log("*********************", banco, "******************************");
console.log("Cliente:", nome);
console.log("Agencia:", agencia, "|Conta:", conta);
console.log("Seu saldo é de R$90.000", saldo);

//Operações aritméticas
var v1 = 12.5;
var v2 = 4.7;
console.log("-------------------------------------------------");
console.log("Valores: v1 =", v1, "| v2 =", v2);
console.log("-------------------------------------------------");
console.log("Soma: v1+v2 =", v1 + v2);
console.log("subtração: v1-v2=", v1 - v2);
console.log("multiplicação: v1*v2=", v1 * v2);
console.log("divisão: v1/v2=", v1 * v2);

v1 = 10;
v2 = 3;
console.log("----------------------------------------------------");
console.log("Valores: v1 =", v1, "| v2 =", v2);
console.log("-------------------------------------------------");
console.log("Resto da divisão inteira: v1%=", v1 % v2);
console.log("Exponenciação: v1**v2 (v1 elevado a v2) =", v1 ** v2);
