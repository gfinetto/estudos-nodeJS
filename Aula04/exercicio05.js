function comparaNumeros (num1, num2, num3) {
    let maior = num1;

    if (num2 > maior) {
        maior = num2;
    }

    if (num3 > maior) {
        maior = num3;
    }

    return maior;
}

    console.log(comparaNumeros(15, 56, 27));