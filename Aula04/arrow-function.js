//Arrow Function também são expressões de funcões e não trabalham com içamento (hoisting). A sintaxe é a seguinte:

const estudanteReprovou = (notaFinal, faltas) => { //tirando o nome function e adicionamos => (arrow)

    if (notaFinal <= 7 && faltas > 4) {
        return true;
    }else {
        return false;
    } 
    }

    //Para funçoes mais curtas, podemos simplificar a sintaxe (muito usado em callbacks e objetos)

    const exibeNome = (nome) => nome; //Não precisamos abrir as {}, nem declarar o return

    //Função acima do jeito normal

    // const exibeNome = (nome) => {
      // return nome;  
    //}

    console.log(estudanteReprovou(5, 7));
    console.log(estudanteReprovou(10, 1));
    console.log(exibeNome('João'));