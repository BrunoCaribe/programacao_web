    var pessoa = {
        nome: ["Bruno"],
        sexo: ["feminino"],
        idade: [19],
        altura: [1.85],
        peso: [85],
        andando: false,
        caminhouQuantosmetros: 1,
        felizAniversario: function() {
            this.idade++
        },

        andar: function(metrosCaminhados) {

            this.caminhouQuantosmetros = this.caminhouQuantosmetros + metrosCaminhados
            this.andando = true

        },
        parar: function() {
            this.andando = false
        },
        nomeCompleto: function() {
            console.log("Meu nome é " + this.nome)
        },
        mostrarIdade: function() {
            console.log("Minha idade é de " + this.idade + " anos")
        },
        mostrarAltura: function() {
            console.log("Minha altura é " + this.altura)
        },
        mostrarMetros: function() {
            console.log("Você andou " + this.caminhouQuantosmetros, " metros")
        },
        apresentacao: function() {

            if ((this.idade == 1), (this.caminhouQuantosmetros == 1)) {
                if (this.sexo === "Masculino") {
                    console.log("Olá, eu sou o " + this.nome + " tenho " + this.idade + " ano, minha altura e " + this.altura + " meu peso é " + this.peso + " e, só hoje, eu já caminhei " + this.caminhouQuantosmetros + " metro!")
                } else {
                    console.log("Olá, eu sou a " + this.nome + " tenho " + this.idade + " ano, minha altura e " + this.altura + " meu peso é " + this.peso + " e, só hoje, eu já caminhei " + this.caminhouQuantosmetros + " metro!")
                }
            } else {
                if ((this.sexo === "Masculino") && (this.caminhouQuantosmetros > 1)) {
                    console.log("Olá, eu sou o " + this.nome + " tenho " + this.idade + " anos, minha altura e " + this.altura + " meu peso é " + this.peso + " e, só hoje, eu já caminhei " + this.caminhouQuantosmetros + " metros!")
                } else {
                    console.log("Olá, eu sou a " + this.nome + " tenho " + this.idade + " anos, minha altura e " + this.altura + " meu peso é " + this.peso + " e, só hoje, eu já caminhei " + this.caminhouQuantosmetros + " metros!")
                }
            }
        }
    }
    pessoa.nomeCompleto()
    pessoa.mostrarIdade()
    pessoa.mostrarAltura()
    pessoa.felizAniversario()
    pessoa.felizAniversario()
    pessoa.felizAniversario()
    pessoa.mostrarIdade()
    pessoa.andar(10)
    pessoa.andar(12)
    pessoa.andar(10)
    pessoa.parar()
    pessoa.mostrarMetros()
    pessoa.apresentacao()