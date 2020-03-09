var divPostit = document.querySelector("#Postit")
var botaoPostit = document.createElement("button")
var inputPostit = document.createElement("input")
var texPostit = document.createTextNode("Adiciona Postit")
var apaagarMensagem = document.createElement("p")

divPostit.appendChild(apaagarMensagem)
apaagarMensagem.appendChild(document.createTextNode("Clique duas vezes"))
divPostit.appendChild(document.createTextNode(""))
divPostit.


function getColor() {
    let letters = '123456789ABCDEF'
    let result = '#'
    for (let i = 0; i < 6; i++) {
        result += letters[Math.floor(Math.random() * letters.length)]
    }
    return result
}