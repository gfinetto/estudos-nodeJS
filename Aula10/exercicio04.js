let anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O Senhor do Anéis',
    autor: 'J. R. R. Tolkien',
    anoPublicacao: 1925,
    genero: 'Ficcão, Fantasia'
}

livro.genero = 'Aventura';

livro.idadePublicacao = livro.anoPublicacao - anoAtual;

livro.avaliacao = null;

const novaAvaliacao = { nota: 10, comentario: 'Livro Perfeito!'}

if(livro.avaliacao === null) {
    livro.avaliacao = novaAvaliacao;
    console.log(livro)
}else {
    console.log('O livro já possui uma avaliação');
}

console.log('Detalhes do livro: ');
console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
console.log(`Gênero: ${livro.genero}`);
console.log(`Idade de Publicação: ${livro.idadePublicacao}`);
console.log("Avaliação: " + "Nota: " + livro.avaliacao.nota + " Comentário: " + livro.avaliacao.comentario);


