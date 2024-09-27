const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

function exibeIndiceEElemnto(arr) {
    for(let i = 0; i < arr.length; i++)
        console.log(`índice ${i}, elemento ${arr[i]}`);
        
}

exibeIndiceEElemnto(meses);