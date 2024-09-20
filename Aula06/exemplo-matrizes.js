const nomes = ['Ana', 'Juliana', 'Leonardo'];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

 const funcionarios = [nomes, idades, faculdade];

 console.log(
    `O funcionário(a) ${funcionarios[0][0]}, tem ${funcionarios[1][0]} anos. Possui faculdade: ${funcionarios[2][0]}.
    O funcionário(a) ${funcionarios[0][1]}, tem ${funcionarios[1][1]} anos. Possui faculdade: ${funcionarios[2][1]}.
    O funcionário(a) ${funcionarios[0][2]}, tem ${funcionarios[1][2]} anos. Possui faculdade: ${funcionarios[2][2]}.
    `
 );

 console.log(funcionarios);