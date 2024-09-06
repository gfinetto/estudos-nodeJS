// //Escopo é o contexto de execução onde os valores e as expressões podem ser acessados ou refereciados. Temos três tipos de escopos: global, bloco, função. 

// if (true) {
//     let num1 = 10;
//     var num2 = 20;

//     const soma = num1 + num2;
//     console.log(soma);
//   }
//   console.clear();

//   /*Escopo Global
//   Qualquer variável que esteja no escopo global pode ser acessada por outras partes do programa. 
//   Uma variável é considerada global quando não é declada dentro de nenhuma função ou bloco. 
//   Exemplo:
//   */

//   const nome = 'Gabriel'; // variável global

//   function cumprimentar() {
//     console.log(`Olá, ${nome}!`); //Acessa a variável global
//   }

//   cumprimentar();
//   console.clear();

//   /*Escopo de Bloco
//   Variáveis declaradas dentroo de chaves { }, como no caso de if, for, while etc., não ficam
//   acessíveis para o código que esteja de fora. Chamamos o código dentro das { } de *Bloco* 
//   Exemplo: 
//   */

//   if (1 > 0) {
//     let nome = 'Ana';
//     console.log(nome); //Ana
//   }

//   //variável 'nome' não está acessível
//   console.log(nome); //ERROR: nome is not defined

//   IMPORTANTE
/*   Variáveis decladas com var não seguem a regra do escopo de bloco! Elas serão consideradas globais
     e poderão ser acessadas de fora do bloco. Faça o teste:
*/

// if (1 > 0) {
//     var nome = 'Ana';
//     console.log(nome); //Ana
//   }

//   console.log(nome); //Ana

/* A falta de controle de escopo é um dos motivos pelo qual o uso de var foi abandonado e as boas práticas atuais
recomendam apenas o uso de const e let.
*/

/*  Escopo de Função
    Variáveis declaradas dentro de uma função são consideradas "locais" (ou seja, o oposto de "globais")
    e não podem ser acessadas por código que esteja fora do bloco da função
    Exemplo:
*/

function cumprimentar() {
    const nome = 'Camila'; // variável local
    const cumprimento = 'Olá'; // variável local
    console.log(`${cumprimento}, ${nome}!`); //Olá Camila!
}
    cumprimentar();
    // As veriáveis não podem ser acessadas de fora da função
    // console.log(`${cumprimento}, ${nome}!`); //Dará erro de "not defined" no console.