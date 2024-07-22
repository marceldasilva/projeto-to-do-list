const container = document.querySelector('.container')
const paleta1 = document.querySelector('#paleta1')
const paleta2 = document.querySelector('#paleta2')
const paleta3 = document.querySelector('#paleta3')
const erro = document.querySelector('.erro')
const input = document.querySelector('.input')
const botaoCadastra = document.querySelector('.botao_adc')
const listaAtividades = document.querySelector('.lista_atividades')
const botaoLimparLista = document.querySelector('.botao_del_todos')

window.addEventListener('load', () => informacao())

function informacao() {
    alert(`Aproveite para anotar todas as suas atividades diárias.`)
}

paleta1.addEventListener('click', () => definePaleta('seagreen'))
paleta2.addEventListener('mousemove', () => definePaleta('slateblue'))
paleta3.addEventListener('dblclick', () => definePaleta('tomato'))

function definePaleta(cor) {
    container.style.background = cor
    listaAtividades.style.background = cor
}

function criaAtividade() {
    if (input.value.length = "String") {
        const atividade = document.createElement('div')
        atividade.classList.add('atividade')

        const nomeAtividade = document.createElement('p')
        nomeAtividade.classList.add('atividade')
        nomeAtividade.textContent = input.value

        const botaoLimpar = document.createElement('button')
        botaoLimpar.classList.add('botao_del')
        botaoLimpar.textContent = 'Limpar'
        botaoLimpar.addEventListener('click', () => removerAtividade(atividade))

        listaAtividades.appendChild(atividade)
        atividade.appendChild(nomeAtividade)
        atividade.appendChild(botaoLimpar)
    }
}

function removerAtividade(atividade) {
    listaAtividades.removeChild(atividade)
}

botaoLimparLista.addEventListener('click', () => limparLista())

function limparLista() {
    while (listaAtividades.firstElementChild) {
        listaAtividades.removeChild(listaAtividades.firstElementChild)
    }
}

botaoCadastra.addEventListener('click', () => cadastraAtividade())

function cadastraAtividade(){
    if(input.value.length > 3) {
        erro.style.display = "none"
        criaAtividade()
    }else {
        erro.style.display = "grid"
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput()
}
function limpaInput(){
    input.value = ""
}

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade()
    }
});