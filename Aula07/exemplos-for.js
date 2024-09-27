//No exemplo abaixo declaramos o valor inicial da variável de controle como o valor da última posição do array (numeros.length -1);
//realizamos um decremento i--, ao invés de um operador de decremento e a condição de execução é i >= 0. Ou seja a variável i começará do valor 5 e irá até 0.

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}