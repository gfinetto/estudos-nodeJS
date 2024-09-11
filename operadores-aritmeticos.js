const notaPrimeiroBi = 7;
const notaSegundoBi = 7;
const notaTerceiroBi = 7;
const notaQuartoBi = 7; //covertendo string p/ number com Number.parseInt para inteiros ou Number.parseFloat para pontos flutuantes

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
    media += media * 0.1;
}

console.log(`A média é ${media.toFixed(2)}`);

console.clear();

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
console.log(resultado);