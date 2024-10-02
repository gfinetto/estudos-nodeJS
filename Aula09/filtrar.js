const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const alunoReprovado = alunos.filter((_, indice) => { //Nesse exemplo usaremos o segundo paramentro (indice), mas obrigatóriamente devemos informar o primeiro, mas como boa pratica quando não vamos usar algum paramentro mas iremos passar por ele usamos o _
    return medias[indice] < 7;
})

console.log(alunoReprovado);