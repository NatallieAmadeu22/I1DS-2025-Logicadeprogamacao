//--------------------OBJETOS EM JAVASCRIPT------------------
//Definindo uma classe em javascript (Pessoa)
//1-Classe (o molde dos objetos) - singular

// class Pessoa { // Criamos uma classe chamada pessoa
//   constructor(pNome, pIdade) { // O construtor é como um formulário
//     this.nome = pNome;
//     this.pIdade = pIdade;

//   }
// }

//2. Objeto: Criamos um personagem/aluno
//var aluno1 = new Pessoa("Lucas", 22); //Criamos um aluno Lucas com 22 anos
//aluno1 é um objeto baseado no molde Pessoa

//3. Métodos- ações que um objeto pode fazer
class Pessoa {
  // Criamos uma classe chamada pessoa
  constructor(pNome, pIdade) {
    // O construtor é como um formulário
    this.nome = pNome;
    this.idade = pIdade;
  }
  apresentarSe() {
    console.log(`Oi meu nome é ${this.nome}, e eu tenho ${this.idade} anos.`);
  }

  envelhecer() {
    this.idade++; // aumenta a idade em 1 ano
  }
}

var aluno1 = new Pessoa("Leo", 16);
aluno1.apresentarSe(); //Oi meu nome é lucas, e eu tenho 16 anos.
aluno1.envelhecer();
aluno1.apresentarSe();

// Class: Molde para criar objetos, como uma ficha de aluno ou um modelo de jogador de futebol.

// Objeto: Uma instancia real do modelo, como Lucas ou Neymar.

// Atributo: Caracteristica do objeto, como nome e idade.

// Métodos: Ações que o objeto pode fazer, como falar sua idade ou envelhecer.

//---------------------------------------------------------------------------//
//Crie uma class para jogador de futebol onde tenha nome, idade e posição
//o objeto criado com base no jogador de futebol poderá apresentar-se
//da seguinte forma: Olá, meu nome é "Neymar", tenho "33" anos e jogo na
//posição "Atacante"
//Crie 3 objetos e faça com que eles se apresentem

class Jogador {
  constructor(nome, idade, posicao) {
    this.nome = nome;
    this.idade = idade;
    this.posição = posicao;
  }
  apresentarSe() {
    console.log(
      `Oi, meu nome é ${this.nome}, eu tenho ${this.idade} anos, e jogo na posição de ${this.posição} `
    );
  }
}
var jogador1 = new Jogador("Neymar", 33, "Atacante");
jogador1.apresentarSe();

//-----------------------------------------------------------------------------------------
//Criando uma classe retângulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  alterarComprimento(comprimento) {
    this.comprimento = comprimento;
  }

  alterarLargura(largura) {
    this.largura = largura;
  }

  obterArea() {
    return this.comprimento * this.largura;
  }
}

var ret = new Retangulo(10, 15);
console.table(ret);

// Apresentando valores (atributos) do objeto instanciado
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);

// Apresentando a area
console.log(`Área: ${ret.obterArea()}`);

// Alterando o comprimento do retangulo
ret.alterarComprimento(20);
console.table(ret);
// Apresentando valores (atributos) do objeto instanciado
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);

/**********************************************************
     lista de exercicios 
**********************************************************/
/*
Crie e utilize uma classe "Sorvete" contendo as propiedades: sabor, preco e tamanho (P / M / G )
*/
//Crie um sorvete de chocolate pequeno.
// Crie um sorvete de morango grande.
//Altere o preço do sorvete de morango grande para R$ 10,51.

class sorvete {
  //construtor para inicializar as propriedades
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
}
var sorvete1 = new sorvete("Chocolate", 3.5, "P");
var sorvete2 = new sorvete("Morango", 3.5, "G");
var sorvete3 = new sorvete("Pistache", 5, "M");

console.log(
  `Sorvete escolhido: ${sorvete1.sabor} | Valor: R$${sorvete1.tamanho} | Valor:R$${sorvete1.preco}`
);
sorvete2.preco = 10.51;
console.table(sorvete2);

sorvete3.tamanho = "G"
console.table(sorvete3);
