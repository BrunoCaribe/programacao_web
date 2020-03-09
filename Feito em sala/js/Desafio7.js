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