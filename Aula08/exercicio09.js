const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

  const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

  const procuraNome = todasAsTurmas.find((nome) => nome === 'Carlos Oliveia');

    if (procuraNome) {
        console.log(`Aluno encontrado: ${procuraNome}`);
    }else {
        console.log('Aluno não encontrado');
    }

  