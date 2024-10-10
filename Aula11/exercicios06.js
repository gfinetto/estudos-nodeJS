const contaBancaria = {
    titular: 'Rafael',
    saldo: 3000,
    depositar: function(valorDeposito) {
        this.saldo += valorDeposito;
    },
    sacar: function(valorSaque) {
        if(valorSaque <= this.saldo){
            this.saldo -= valorSaque;
        }else {
            console.log(`O valor solicitado para saque não está disponível para saque. O seu saldo é de: ${this.saldo}`);
        };
    }
};

const cliente = {
    nome: 'Lula',
    conta: contaBancaria
}

function mostrarSaldo(ciente) {
    console.log(`O nome do cliente é: ${cliente.nome} e o saldo atual é: ${cliente.conta.saldo}`);
}

cliente.conta.depositar(1000);
cliente.conta.sacar(4500)

mostrarSaldo(cliente);

