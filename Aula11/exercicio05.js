const contaBancaria = {
    titular: 'Giovanni',
    saldo: 2400,
    depositar: function(valorDeposito) {
        this.saldo += valorDeposito;
    },
    sacar: function(valorSaque) {
        if(valorSaque <= this.saldo){
            this.saldo -= valorSaque;
        }else {
            console.log('O valor do saque é maior do que o disponível em conta corrente!')
        };
    }
};

const cliente = {
    nome: 'João',
    conta: contaBancaria
}


function mostrarSaldo(cliente) {
    return console.log(`A conta pertence a: ${cliente.nome} e o saldo é: ${cliente.conta.saldo}`)
};

cliente.conta.depositar(1000);
cliente.conta.sacar(400);


mostrarSaldo(cliente);

