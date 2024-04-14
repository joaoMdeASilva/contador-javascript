let contador = 0;

function botaoMais() {
    contador++
    return document.getElementById('contador').innerText = contador;     
}

function botaoMenos() {
    contador--
    return document.getElementById('contador').innerText = contador;     
}