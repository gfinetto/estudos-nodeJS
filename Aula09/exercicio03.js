const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

let novaLista = [...new Set([...coresLista1, ...coresLista2])];

console.log(novaLista);

