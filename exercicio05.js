const usuarioLogado = true;
const permissaoAdmin = true; 

function verificaUsuario() {
    if (usuarioLogado && permissaoAdmin) {
        return 'O usuário é um administrador do sistema';
    }else {
        return 'O usuário não é um administrador do sistema';
    }
}

console.log(verificaUsuario());