var isTruthy = (value) => {
    if (value) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isTruthy(0)
isTruthy(null)
isTruthy(undefined)
isTruthy(false)
isTruthy(NaN)

isTruthy(1)
isTruthy({})
isTruthy(true)
isTruthy(1 + "2555555")
isTruthy(2)
isTruthy(3)
isTruthy(4)
isTruthy("teste")
isTruthy([])






var carro = {
    marca: "Chrevolet",
    modelo: "Opala Diplomata 4.1",
    placa: "placa",
    ano: "1990",
    cor: "Preto",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,
    mudarCor: function(cor) {
        this.cor = cor
    },

    obterCor: function() {
        console.log(this.cor)
    },

    obterModelo: function() {
        console.log(this.modelo)
    },

    obterMarca: function() {
        console.log(this.marca)
    },

    obterMarcaModelo: function() {
        console.log("Esse carro é um " + this.obterMarca() + ' ' + this.obterModelo())
    },

    adcPessoas: function(value) {
        var vagas = carro.assentos - carro.quantidadePessoas
        var teste = vagas === 1
        if (carro.quantidadePessoas >= carro.assentos) {
            console.log("Já temos " + carro.quantidadePessoas + " pessoas no carro!" + "O carro já está lotado!")
        } else if (carro.quantidadePessoas <= carro.assentos) {
            if (vagas >= value) {
                carro.quantidadePessoas += value
                console.log("Já temos " + carro.quantidadePessoas + " pessoas no carro!")
            } else {
                console.log("Só cabem mais " + vagas + teste)
            }
        }

    }
}
carro.obterCor()
carro.mudarCor('vermelho')
carro.obterCor()
carro.mudarCor('verde musgo')
carro.obterCor()
carro.obterMarca()
carro.obterModelo()
carro.adcPessoas(2)
    //Já temos 2 pessoas no !
carro.adcPessoas(4)
    //Só cabem mais 3 pessoas no carro!
carro.adcPessoas(3)
    //Já temos 5 pessoas no carro!
carro.adcPessoas(10)
    //O carro ja está lotado!