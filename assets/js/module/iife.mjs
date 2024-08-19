import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "../class.mjs";


const iife = (() => {

    const animalsArray = []
    async function obtenerDataJson(nombre) {
        try {
            const response = await fetch("animales.json")
            const data = await response.json()
            const animalData = data.animales.find(animal => animal.name === nombre);
            return animalData

        } catch (error) {
            console.error('Error al obtener la imagen:', error)
        }
    }

    function addAnimal(animal) {
        animalsArray.push(animal)
        return animalsArray;
    }



    function cardsAnimal(animales, id) {
        const container = document.getElementById(id);
        container.innerHTML = '';
        let cartas = ''
        animales.forEach((animal, index) => {
            cartas += `
                <div class="card my-2 cardBody btnMostrarModal" style="width: 18rem;" data-index="${index}">
                    <img src="./assets/imgs/${animal.Img}" 
                    alt="${animal.Nombre}" 
                    class="card-img-top" 
                    data-bs-toggle="modal" 
                    data-bs-target="#myInput">
                    
                    <div class="card-body text-center">
                    <h5 class="card-title">${animal.Nombre}</h5>
                    
                    <audio controls style="max-width:100%">
                    <source src='./assets/sounds/${animal.Sonido}'
                    type='audio/mpeg'>
                    </audio>
                    </div>
                </div>
            `

        });
        container.innerHTML = cartas
        cartas = ''

        document.querySelectorAll('.btnMostrarModal').forEach(card => {
            card.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                
                abrirModal(animales[index]); 
            });
        });

    }

    function abrirModal(animal) {

        const cabeceraModal = document.getElementById('cabeceraModal');
        const cuerpoModal = document.getElementById('cuerpoModal');
        const tituloModal = document.getElementById('tituloModal');

        cabeceraModal.innerHTML = `<h5>${animal.Nombre}</h5>`;
        cuerpoModal.innerHTML = animal.createModalContent();
        tituloModal.innerHTML = animal.Nombre;
    }


    return {
        obtenerDataJson,
        cardsAnimal,
        addAnimal,
        animalsArray
    }
})()
export { iife }