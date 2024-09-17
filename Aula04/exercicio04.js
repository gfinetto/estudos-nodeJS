function verificaPalindromo (string) {
    const stringInvertida = string.split('').reverse().join('');

    return string.toLowerCase() === stringInvertida.toLowerCase();
    
}

console.log(verificaPalindromo('chocolate'));
console.log(verificaPalindromo('otto'));