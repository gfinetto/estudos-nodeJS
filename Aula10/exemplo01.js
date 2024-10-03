const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
 }

 pessoa.seguroSocial = '14785-4';
 pessoa.cpf = '123456789-21';


 function imprimeObjeto(objPessoa) {
    if (objPessoa.cpf > 3) {
        console.log(pessoa.cpf.substring(0, 4));
    }
 }
 

 console.log(imprimeObjeto(pessoa));