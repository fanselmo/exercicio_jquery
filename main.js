const form = document.getElementById('form-taskList');
const tasks = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela ()

})

function adicionaLinha() {
    const inputTasks = document.getElementById('inputTask')
    tasks.push(inputTasks.value)

    let linha = '<tr>'
    linha += `<td>${inputTasks.value}</td>`

    linhas += linha

    inputTasks.value = ''
}

function atualizaTabela() {
const corpoTabela = document.querySelector('tbody')
corpoTabela.innerHTML = linhas
}

function addlinethrough()
{
    tabelinha.style.textDecoration = "line-through"
}

function clearline()
{
    tabelinha.style.textDecoration = "none"
}


$('')


