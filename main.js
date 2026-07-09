// Seleciona o elemento que exibe o número de caracteres na tela
const numeroSenha = document.querySelector('.parametro-senha__texto');

// Define o tamanho inicial padrão da senha
let tamanhoSenha = 12;

// Sincroniza o valor inicial da variável com a tela do navegador
numeroSenha.textContent = tamanhoSenha;

// Seleciona todos os botões que possuem a classe informada (retorna uma lista)
const botoes = document.querySelectorAll('.parametro-senha__botao');

// Atribui as funções de clique aos respectivos botões da lista
botoes[0].onclick = diminuiTamanho; // Primeiro botão: "-"
botoes[1].onclick = aumentaTamanho; // Segundo botão: "+"

/**
 * Função responsável por diminuir o tamanho da senha.
 * Restringe o valor para que não seja menor que 1.
 */
function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--; // Subtrai 1 do valor atual
    }
    numeroSenha.textContent = tamanhoSenha; // Atualiza a tela
}

/**
 * Função responsável por aumentar o tamanho da senha.
 * Restringe o valor para que não ultrapasse 20.
 */
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++; // Adiciona 1 ao valor atual
    }
    numeroSenha.textContent = tamanhoSenha; // Atualiza a tela
}
