var array = [1, 2, "3", "nome", "fiesta"]

console.log(array)

function pegarray(value) {
    var arraydois = [5, "6", "idade"]
    var add = value + arraydois
    return add
}
array.push([5, "6", "idade"])
console.log("O segundo elemento do array é " + array[1])

console.log("O primeiro array tem  " + array.length + " itens")

console.log("O segundo  array tem  " + array[].length + " itens")

var i = 10

while (i <= 20) {
    i % 2 == 0 ? console.log('Números pares entre 10 e 20: ' + i) : false
    i++
}
var j = 10
while (j <= 20) {
    j % 2 != 0 ? console.log('Números ímpares entre 10 e 20: ' + j) : false
    j++
}
for (var i = 100; i <= 120; i++) {
    i % 2 == 0 ? console.log('Números pares entre 100 e 120:' + i) : false
}
for (var j = 111; j <= 125; j++) {
    j % 2 != 0 ? console.log('Números ímpares entre 111 e 125: ' + j) : false
}