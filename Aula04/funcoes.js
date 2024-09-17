//parâmetros/argumentos 
//retorno
console.log(exibeInfosEstudante('João', 7));
console.log(exibeInfosEstudante('Maria', 4));


function exibeInfosEstudante(nome, nota) { //Os parâmentros são incluidos nos parentêses eles podem ser vázios (sem parâmetros), ou com um ou mais valores. 
   return `O nome é ${nome} e a nota é ${nota}`;
}

//Hoisting 
//Quando usamos a função declarada podemos chamar a função antes da sua declaração que o JS irá ler normalmente, já numa expressão de função não. 