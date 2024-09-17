function dividir(dividendo, divisor) {
    return  dividendo / divisor;

  //O return deve ser a última linha de código da função. O que vir após a ele não sera executado. 
  console.log('fim da função') //Não será excutado


}

const resultado = dividir(10, 5); //os paramentros de uma função precisam ser passados na ordem certa.
console.log(`O resultado é ${resultado}`);