// Selecionando os elementos do HTML
const campoTarefa = document.getElementById('campo-tarefa');
const botaoAdicionar = document.getElementById('botao-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');
const contadorTarefas = document.getElementById('contador-tarefas');
const botaoTema = document.getElementById('botao-tema');
const body = document.body;

// Função para atualizar o contador de tarefas
function atualizarContador() {
    const totalTarefas = listaTarefas.children.length;
    if (totalTarefas === 1) {
        contadorTarefas.textContent = '1 tarefa na lista';
    } else {
        contadorTarefas.textContent = `${totalTarefas} tarefas na lista`;
    }
}

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    // Criando o elemento da lista (li)
    const itemTarefa = document.createElement('li');
    itemTarefa.classList.add('item-tarefa');

    // Texto da tarefa
    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarefa;

    // Container para os botões de ação (concluir e excluir)
    const divAcoes = document.createElement('div');
    divAcoes.classList.add('acoes');

    // Botão de concluir
    const botaoConcluir = document.createElement('button');
    botaoConcluir.innerHTML = '<i class="fa-solid fa-check"></i>';
    botaoConcluir.classList.add('botao-concluir');
    botaoConcluir.addEventListener('click', () => {
        itemTarefa.classList.toggle('concluida');
    });

    // Botão de excluir
    const botaoExcluir = document.createElement('button');
    botaoExcluir.innerHTML = '<i class="fa-solid fa-trash"></i>';
    botaoExcluir.classList.add('botao-excluir');
    botaoExcluir.addEventListener('click', () => {
        itemTarefa.remove();
        atualizarContador();
    });

    // Juntando os elementos
    divAcoes.appendChild(botaoConcluir);
    divAcoes.appendChild(botaoExcluir);

    itemTarefa.appendChild(spanTexto);
    itemTarefa.appendChild(divAcoes);

    listaTarefas.appendChild(itemTarefa);

    // Limpar o campo de input e atualizar contador
    campoTarefa.value = '';
    campoTarefa.focus();
    atualizarContador();
}

// Evento de clique no botão "Adicionar"
botaoAdicionar.addEventListener('click', adicionarTarefa);

// Evento de apertar a tecla "Enter" no campo de texto para adicionar
campoTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

// Funcionalidade de alternar o tema (Modo Claro / Modo Escuro)
botaoTema.addEventListener('click', () => {
    body.classList.toggle('modo-escuro');

    const icone = botaoTema.querySelector('i');
    
    // Troca o ícone do botão dependendo do modo ativo
    if (body.classList.contains('modo-escuro')) {
        icone.classList.remove('fa-moon');
        icone.classList.add('fa-sun');
    } else {
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon');
    }
});