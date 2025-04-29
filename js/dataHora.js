function atualizarDataHora() {
    const elemento = document.getElementById('dataHora');
    const agora = new Date();
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = agora.getFullYear();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    elemento.innerHTML = `${dia}/${mes}/${ano} - ${horas}:${minutos}:${segundos}`;
}

// Atualiza a cada segundo
setInterval(atualizarDataHora, 1000);

// Chama a função imediatamente para exibir a data e hora ao carregar a página
atualizarDataHora();