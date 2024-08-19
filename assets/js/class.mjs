class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;
    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }
    // Getters
    get Nombre() {
        return this.#nombre;
    }
    get Edad() {
        return this.#edad;
    }
    get Img() {
        return this.#img;
    }
    get Sonido() {
        return this.#sonido;
    }
    // Setters
    set Comentarios(comentarios) {
        this.#comentarios = comentarios;
    }

    createModalContent() {
        return `
            <img class="img-fluid mb-3" src="../assets/imgs/${this.#img}" alt="${this.#nombre}" style="width:20rem;" />
            <h4 >${this.#edad}</h4>
            <p>Comentarios</p>
            <p><strong>Category:</strong> ${this.#comentarios}</p>
        `
    }

}

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, ) {
        super(nombre, edad, img, comentarios, sonido)
    }
    rugir(){
        return 'Rugido'
    }
}
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, ) {
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar(){
        return 'Auuuuu'
    }
}
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, ) {
        super(nombre, edad, img, comentarios, sonido)
    }
    grunir(){
        return 'Roooooaarr'
    }
}
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, ) {
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear(){
        return 'sssss'

    }
}
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, ) {
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar(){
        return 'kokoooo'
    }
}

export {
    Animal,
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila
}