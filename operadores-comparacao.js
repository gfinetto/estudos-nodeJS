const estaAprovado = true;

if (estaAprovado === true) {
    console.log('aprovado');
}

if ('0' == 0) { //A diferença entre == e === é que os "3 iguais" também verifica o tipo da variavel que está sendo comparada. Como melhor prática e para evitar bug devemos sempre utilizá-los em qlq comparação
    console.log('Passou na comparação');
}else {
    console.log('Não passou na comparação');
}