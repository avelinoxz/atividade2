function verificarAcesso() {
    const nomeValido = "cliente";
    const senhaCorreta = "1234";
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const resultado = document.getElementById('resultado');
    if (nome === nomeValido && senha === senhaCorreta) {
        resultado.innerHTML = "Acesso permitido! Bem-vindo.";
    } else {
        resultado.innerHTML = "Acesso negado! Nome de usuário ou senha incorretos.";
    }
}