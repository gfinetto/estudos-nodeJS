const calculadora = {
    soma: function(num1, num2) {
        const somaTotal = num1 + num2;
        return console.log(`A soma dos dois números é: ${somaTotal}`);
    },

    subtracao: function(num1, num2) {
        const subTotal = num1 - num2;
        return console.log(`A subtração dos dois números é: ${subTotal}`);
    },

    mutiplicacao: function(num1, num2) {
        const multiplicacaoTotal = num1 * num2;
        return console.log(`A multilicação dos dois números é: ${multiplicacaoTotal}`);
    },

    divisao: function(num1, num2) {
      
            if (num2 !== 0) {
                const divTotal = num1 / num2;
                console.log(`A divisão dos dois números é: ${divTotal}`);
            }else {
                console.log('A aplicação não realiza divisões por 0');
            }
    },

    calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
}

calculadora.soma(2, 3);
calculadora.subtracao(10, 5);
calculadora.mutiplicacao(4, 3);
calculadora.divisao(6, 2);
calculadora.divisao(10, 0);

const numerosParaMedia = [10, 50, 30, 45, 88];
console.log('Media: ' + calculadora.calcularMedia(numerosParaMedia));