const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaperguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaresultado = document.querySelector('.caixa-resultado');
const textoresultado = document.querySelector('.texto-reaultado');

 const perguntas = [
  {
    enunciado:"insira o enunciado da pergunta 1",
    alternativas: ["Alternativa 1", "Alternativa 2"],
  },
  {
    enunciado:"insira o enunciado da pergunta 2",
    alternativas: ["Alternativa 1 ", "Alternativa 2"],
  }, 
  {
    enunciado:"insira o enunciado da pergunta 3",
    alternativas: ["Alternativa 1 ", "Alternativa 2"],
  },
];
const lapis = {
  tamanho:20,
  tipo:'HB',
  cor:'Grafite',
  temBorrachaAtras: false
}
[//abre lista de perguntas
{//abre objeto de pergunta
  enunciado:"pergunta 1",
  alternativas:[
    'Alternativa 1',
    'Alternativa 2'
  ]
}//fecha objeto de pergunta
]//fecha lista de perguntas
 
let atual = 0;
let pertguntaAtual;

 function mostraPergunta() {
perguntaAtual = perguntas [atual]
caixaperguntas.textContent = perguntaAtual.enunciado;
}
const caixaPerguntas = document.querySelector(".caixa-perguntas");