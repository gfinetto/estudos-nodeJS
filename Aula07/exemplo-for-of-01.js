const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let i =0; i < precos.length; i++) {
precos[i] = precos[i] * desconto;

}

console.log(precos);
