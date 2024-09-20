const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Estrutura FOR 
// Primeira expressão: Executada apenas uma vez;
// Segunda expressão: condição de execução;
// Terceira expressão: executada sempre ao final do bloco;

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(`O índice ${indice} pertence ao elemento ${numeros[indice]}`);
}