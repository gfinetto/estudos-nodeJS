const listaProdutos = ['Caneta', 'Lápis', 'Borracha', 'Caderno', 'Apontador'];
const tabelaPrecos = [2.5, 1.25, 3, 13.5, 2.75];

const produtos = [listaProdutos, tabelaPrecos];

function retornaProdutoEPreco(produto){
    if (produtos[0].includes(produto)){
        const indice = produtos[0].indexOf(produto);
        const precoProduto = produtos[1][indice];

        console.log(`O ${produto} custa ${precoProduto} reais`);
    }else {
        console.log("O produto não foi encontrado em nossa lista");
    }
}

retornaProdutoEPreco('Borracha');
retornaProdutoEPreco('Agenda');
retornaProdutoEPreco('Apontador');