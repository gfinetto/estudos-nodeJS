const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9];

const lista = [alunos, notas];

function exibeNomeENota(aluno) {
    if(lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a médica ${mediaAluno}`);
    } else {
        console.log('Estudante não existe na lista')
    }
}

exibeNomeENota('Caio');
exibeNomeENota('Gabriel');