var recebe = [5, 6, 8, 4, 9]

function realiza(pegaarray) {
    if (typeof(pegaarray == "Teste")) {
        return pegaarray
    }
}

realiza(recebe)
realiza(recebe)[1]

function realizadois(pegaarray, index) {
    var mostrar = (pegaarray)[index]
    return mostrar

}

function book(value) {
    var livros = {
        Magic: {
            quantidadedepaginas: ("O livro " + Magic + "tem 56 páginas"),
            autor: "Bruno",
            editora: "Djs"
        },
        Magic1: {
            quantidadedepaginas: "57",
            autor: "Bruno",
            editora: "Djs"
        },
        Magic2: {
            quantidadedepaginas: "58",
            autor: "Bruno",
            editora: "Djs"
        }
    }
    if (value != undefined) {
        return livros[value]
    } else {
        return livros
    }

}

book()
book("magic").quantidadedepaginas
book("Magic").editora