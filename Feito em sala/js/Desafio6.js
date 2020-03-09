var championship = "Copa corona"
var teams = ["ba", "vi", "pr", "mg", "pa"]




console.log(championship)
console.log('Times que estão participando do campeonato:', teams);

function showTeamPosition(index) {
    if (index <= 5) {
        console.log("O time que está em " + index + " lugar é o  " + teams[index - 1])
    } else {
        console.log("Não temos a informação do time que está nessa posição.")
    }

}

var i = 20

while (i < 31) {
    console.log(i)
    i++
}

function convertToHex(cor) {
    switch (cor) {
        case 'branco':
            return "O hexadecimal para a cor " + cor + " é fff"
            break;
        case 'preto':
            return "O hexadecimal para a cor " + cor + " é 000"
            break;
        case 'vermelho':
            return "O hexadecimal para a cor " + cor + " é #ff0000"
            break;
        case 'verde':
            return "O hexadecimal para a cor " + cor + " é #00fe00"
            break;
        case 'azul':
            return "O hexadecimal para a cor " + cor + " é #0001ff"
            break;
        default:
            return "Não temos o equivalente hexadecimal para " + cor
    }