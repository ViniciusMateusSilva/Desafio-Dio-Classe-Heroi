class classe{
    constructor(nome, idade, tipo, atacar){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.atacar = atacar
    }
    ataque(tipo, atacar){
        console.log(`O ${tipo} atacou usando ${atacar} `)
    }
}
let mago = new classe("José", 53, "Mago", "Magia")
let guerreiro = new classe("Carlos", 32, "Guerreiro", "Espada")
let monge = new classe("Josefino", 66, "Monge", "Artes Marciais")
let ninja = new classe("Kokimoto", 22, "Ninja", "Shuriken")

mago.ataque(monge.tipo, monge.atacar)