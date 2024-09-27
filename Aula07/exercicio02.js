const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

function imprimirElemento(arr) {
    for(let elemento of arr){
        console.log(elemento);
    }
}

imprimirElemento(meses);
console.clear();

for(let mes of meses) {
    console.log(meses);
}
