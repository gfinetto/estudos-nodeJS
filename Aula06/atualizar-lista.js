const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo'); //Primeiro parametro: a partir de qual índice vamos exluir. Segundo parâmetro: quantos elementos vamos excluir a partir do índice informado. 
// Terceiro parâmetro: conteúdo que queremos adicionar no lugar dos itens exluidos. 

console.log(listaEstudantes);