//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos ao array
function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo"); // Captura o campo de input
    const nome = nomeInput.value.trim(); // Remove espaços em branco antes e depois do nome

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    nomeInput.value = ""; // Limpa o campo de input após adicionar o nome

    // Atualiza a lista de amigos na interface
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos nomes

    // Adiciona cada nome na lista exibida
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para realizar o sorteio
function sortearAmigo() {
    // Verifica se há pelo menos 2 amigos para realizar o sorteio
    if (amigos.length < 2) {
        alert("É necessário adicionar pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    let amigosSorteados = [...amigos]; // Cria uma cópia do array de amigos
    let sorteados = [];  // Array para armazenar os amigos sorteados

    // Realiza o sorteio
    for (let i = 0; i < amigos.length; i++) {
        let indiceSorteado;

        // Evita que uma pessoa tire ela mesma
        do {
            indiceSorteado = Math.floor(Math.random() * amigosSorteados.length);
        } while (amigosSorteados[indiceSorteado] === amigos[i] || sorteados.includes(amigosSorteados[indiceSorteado]));

        sorteados.push(amigosSorteados[indiceSorteado]);
        amigosSorteados.splice(indiceSorteado, 1);  // Remove o nome sorteado da lista
    }

    // Exibe o resultado do sorteio
    exibirResultado(sorteados);
}

// Função para exibir o resultado do sorteio
function exibirResultado(sorteados) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";  // Limpa o resultado anterior

    // Exibe o resultado do sorteio
    sorteados.forEach((amigoSorteado, index) => {
        const paragrafo = document.createElement("li");
        paragrafo.textContent = `${amigos[index]} tirou ${amigoSorteado}`;
        resultadoDiv.appendChild(paragrafo);
    });
}

