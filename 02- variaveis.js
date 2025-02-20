// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");
console.log("------------------------------------------------------");

//JavaScript trabalha com sistema case sensitive (maiúscula são diferentes de minúscula)
console.log("Criando uma variável Teste e tentando acessar como testE.");
let Teste = "Variavel teste";
//console.log(testE)
console.log(Teste);

//REGRAS PARA NOMEAR IDENTIFICADORES (VARIAVEIS)
//Podem iniciar com 'A' - 'Z', 'a' - 'z', '_' - '$'
let minhavariavel = 10;
let outravariavel = 2.65;
const _minhaConstante = "Uma constante qualquer!";
var $minhaVariavel = -5;

//Variaveis logicas (boolean);
var nome = "Natallie";
var eEsperta = false;
var eLinda = true;
console.log("Nome", nome, "| É esperta?", eEsperta, "| É linda?", eLinda);
