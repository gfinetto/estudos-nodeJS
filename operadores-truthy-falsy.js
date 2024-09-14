const notaFinal = 6.5;
const faltas = 2;
const advertencias =1 ;

if (notaFinal < 7 && faltas > 4) { //|| operador lógico OR -- && operador lógico AND
    console.log('reprovado, boas festas');
}else {
    console.log('Aprovado, boas festas');
}

if (faltas >= 2 && !advertencias) {
    console.log('Recebeu bônus');
}else {
    console.log('Não recebeu bônus');
}

