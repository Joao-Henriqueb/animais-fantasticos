export default [
  {
    rules:{
      //'no-console':'error' ,
      indent:['error',2],
      'keyword-spacing':'error',
      'no-multiple-empty-lines': 'error', // muitas linhas de espaço causa erro
      'eol-last':['error', 'always'], // uma linha de espaço no final de arquivos js
      semi:['error','always'], //sempre tem que por ponto e virgula no final
      'no-trailing-spaces':'error',
      'operator-assignment':'error',
      'no-inner-declarations':[
        'error',
        'functions',
        {blockScopedFunctions:'disallow'},
      ]//evita declarações internas em funções

    }
  }
];
