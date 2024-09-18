// let resultado;

// const calculaPotencia = (base, expoente) => resultado = base ** expoente;

// console.log(calculaPotencia(8, 2));

// // Maneira 2

const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é resultado: ${resultado}`);