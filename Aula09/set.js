const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

// const nomesAtualizados = new Set(nomes); //O set é tipo um array, mas não é. É um conjunto. Os métodos de array não funcionam com Set. 

const listaNomesAtualizados = [...new Set(nomes)]; //Usando o operador de espalhamento eu consigo transformar o set é um array, e assim posso usar o métodos e manipular como array.

// listaNomesAtualizados.push('Gabriel');

console.log(listaNomesAtualizados);

