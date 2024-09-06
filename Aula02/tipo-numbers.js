const notaPrimeiroBi = 8;
const notaSegundoBi = 7.8;
const notaTerceiroBi = -1.5;
const notaQuartoBi = Number.parseInt('6.7'); //covertendo string p/ number com Number.parseInt para inteiros ou Number.parseFloat para pontos flutuantes

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log("A média é " + total.toFixed(1));

let numHex = 0xA; // Representa o número 10 em hexadecimal
console.log(typeof numHex); // Saída: 10