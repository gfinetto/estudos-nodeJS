const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota){ //o parâmetro nota armazena cada elemento do array por vez quando o percorre, como a tradução literal forEach = ParaCada (elemento faça:)
    somaDasNotas += nota;
}
)

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}`);
console.clear();


//Exemplo 02 
const notas1 = [5.5, 6.5, 10, 9.5];

notas1.forEach(function(nota2){
    console.log(nota2)
})