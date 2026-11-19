// Comportamentos da página de clientes. Só melhora a tela:
// quem salva, altera e exclui continua sendo o servidor (ClienteController).

document.addEventListener("DOMContentLoaded", () => {
    focarCampoNovo();
    ativarBusca();
    ativarBotoesAlterar();
    confirmarExclusao();
});

// Deixa o cursor no campo "Nome do cliente" ao abrir a página.
function focarCampoNovo() {
    const campo = document.querySelector(".form-novo input[name='nome']");
    if (campo) {
        campo.focus();
    }
}

// Filtra as linhas da tabela enquanto o usuário digita na busca.
function ativarBusca() {
    const busca = document.getElementById("busca");
    const semResultado = document.getElementById("sem-resultado");
    const linhas = document.querySelectorAll(".linha-cliente");
    if (!busca) {
        return;
    }

    busca.addEventListener("input", () => {
        const termo = busca.value.trim().toLowerCase();
        let visiveis = 0;

        linhas.forEach((linha) => {
            const nome = linha.querySelector("input[name='nome']").value.toLowerCase();
            const aparece = nome.includes(termo);
            linha.classList.toggle("oculto", !aparece);
            if (aparece) {
                visiveis++;
            }
        });

        const mostrarAviso = linhas.length > 0 && visiveis === 0;
        semResultado.classList.toggle("oculto", !mostrarAviso);
    });
}

// O botão "Alterar" só fica ativo quando o nome da linha foi modificado.
function ativarBotoesAlterar() {
    document.querySelectorAll(".form-alterar").forEach((form) => {
        const campo = form.querySelector("input[name='nome']");
        const botao = form.querySelector("button");
        const nomeOriginal = campo.value;

        botao.disabled = true;
        campo.addEventListener("input", () => {
            botao.disabled = campo.value.trim() === nomeOriginal.trim();
        });

        // Esc desfaz a edição da linha.
        campo.addEventListener("keydown", (evento) => {
            if (evento.key === "Escape") {
                campo.value = nomeOriginal;
                botao.disabled = true;
            }
        });
    });
}

// Pede confirmação antes de excluir um cliente.
function confirmarExclusao() {
    document.querySelectorAll(".form-excluir").forEach((form) => {
        form.addEventListener("submit", (evento) => {
            const nome = form.dataset.nome;
            if (!confirm(`Excluir o cliente "${nome}"?`)) {
                evento.preventDefault();
            }
        });
    });
}
