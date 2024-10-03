let anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O Senhor do Anéis',
    autor: 'J. R. R. Tolkien',
    anoPublicacao: 1925,
    genero: 'Ficcão, Fantasia'
}

livro.idadePublicacao = livro.anoPublicacao - anoAtual;

const mostraDetalhes = livro;

console.log(mostraDetalhes);

console.log(mostraDetalhes['titulo']);
console.log(mostraDetalhes['autor']);
console.log(mostraDetalhes['anoPublicacao']);
console.log(mostraDetalhes['genero']);
console.log(mostraDetalhes['idadePublicacao']);