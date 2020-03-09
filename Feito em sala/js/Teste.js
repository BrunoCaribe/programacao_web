function getColor() {
    let letters = '123456789ABCDEF'
    let result = '#'
    for (let i = 0; i < 6; i++) {
        result += letters[Math.floor(Math.random() * letters.length)]
    }
    return result
}
let body = document.getElementsByTagName('body')[0]
let button = document.createElement('button')
let hideButton = document.createElement('button')
hideButton.innerHTML = 'Excluir'
hideButton.addEventListener('click', () => {
    let data = document.getElementsByClassName('postit')
    console.log(data[0])
    for (let i = 0; i < data.length; i++) {
        data[i].style.display = 'none'
    }
})
let showButton = document.createElement('button')
showButton.innerHTML = 'Mostrar'
showButton.addEventListener('click', () => {
    let data = document.getElementsByClassName('postit')
    console.log(data[0])
    for (let i = 0; i < data.length; i++) {
        data[i].style.display = 'flex'
    }
})
let input = document.createElement('input')
button.innerHTML = 'Adicionar postit'
button.addEventListener('click', () => {
    let postit = document.createElement('div')
    postit.style.width = '200px'
    postit.style.height = '200px'
    postit.style.border = 'solid 1px black'
    postit.style.textAlign = 'center'
    postit.style.marginBottom = '5px'
    postit.style.display = 'flex'
    postit.style.justifyContent = 'center'
    postit.style.alignItems = 'center'
    postit.className = 'postit'
    postit.style.wordWrap = 'break-word';
    postit.addEventListener('dblclick', function hideMe() {
        postit.style.display = 'none'
    })
    let p = document.createElement('p')
    p.innerHTML = input.value
    p.style.width = '200px'
    postit.appendChild(p)
    postit.style.backgroundColor = getColor()
    postit.addEventListener('click', () => {
        postit.style.backgroundColor = getColor()
    })
    body.appendChild(postit)
})
body.appendChild(button)
body.appendChild(input)
body.appendChild(hideButton)
body.appendChild(showButton)