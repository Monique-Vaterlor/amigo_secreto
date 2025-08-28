//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    // Seleciona os elementos do DOM
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nome = inputAmigo.value.trim(); // Pega o nome e remove espaços em branco

    // 1. Valida se o campo de nome está vazio
    if (nome === '') {
        alert('Por favor, digite um nome para adicionar.');
        return;
    }

    // 2. Valida se o nome já existe na lista
    if (amigos.map(a => a.toLowerCase()).includes(nome.toLowerCase())) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        inputAmigo.value = ''; // Limpa o campo para nova digitação
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista de nomes na tela. Adiciona o novo amigo como um item de lista (li)
    const novoAmigoItem = document.createElement('li');
    novoAmigoItem.textContent = nome;
    listaAmigos.appendChild(novoAmigoItem);

    // Limpa o campo de input e foca nele novamente
    inputAmigo.value = '';
    inputAmigo.focus();
}

/**
 * Realiza o sorteio de um amigo da lista.
 */
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Valida se há pelo menos 2 amigos para o sorteio
    if (amigos.length < 2) {
        alert('Você precisa de pelo menos 2 amigos na lista para fazer o sorteio.');
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>!</li>`;
}

// Bônus: Permite adicionar com a tecla "Enter"
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
