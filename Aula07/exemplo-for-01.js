// Neste exemplo alterando o decremento para i-=2, o valor de i será diminuido de 2 em 2 a cada iteração (lembrando que a expressão i-=2 equivale a i = i -2). Assim os valores de i serão 5, 3, 1
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i -= 2) {
    console.log(numeros[i]);
}