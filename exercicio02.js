//Operador Lógico AND &&

const idade = 17;
const possuiHabilitacao = false;

if (idade >= 18 && possuiHabilitacao) {
    console.log('Esse motorista pode dirigir normalmente!');
}else {
    console.log('Esse motorista não pode dirigir');
}
console.clear();

//Operador Lógico OR ||

const temExperiencia = false;
const temDiploma = false;

if (temExperiencia || temDiploma) {
    console.log('Esta vaga se aplica ao candidato');
}else {
    console.log('Esta vaga não se aplica ao candidato');
}
console.clear();

//Operador Lógico NOT !

const chuva = true;

if (!chuva) {
    console.log('Não está chovendo. Pode sair de casa');
}else {
    console.log('Está chovendo. Melhor ficar em casa');
}