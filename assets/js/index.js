
import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./class.mjs";
import { iife as funcionAutoejecudable } from "./module/iife.mjs";

const instanciadorAnimales = { Aguila, Leon, Lobo, Oso, Serpiente }

document.getElementById('btnRegistrar').addEventListener('click', async () => {
  const nombreHTML = document.getElementById('animal')
  const edadHTML = document.getElementById('edad')
  const comentariosHTML = document.getElementById('comentarios')
  const { imagen, sonido } = await funcionAutoejecudable.obtenerDataJson(nombreHTML.value);

  if (!nombreHTML.value || !edadHTML.value || !comentariosHTML.value) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Creamos instancia de un animal
  let animal = new instanciadorAnimales[nombreHTML.value](
    nombreHTML.value,
    edadHTML.value,
    imagen,
    comentariosHTML.value,
    sonido
  );

  // Agregamos animal a lista de animales
  funcionAutoejecudable.addAnimal(animal)

  // Mostramos en contenedor de animales
  funcionAutoejecudable.cardsAnimal(funcionAutoejecudable.animalsArray, 'Animales')

  // Limpiar formulario
  nombreHTML.value = nombreHTML.defaultValue
  comentariosHTML.value = ''
  edadHTML.value = edadHTML.defaultValue
  document.getElementById('preview').innerHTML = ''
})

document.getElementById('animal').addEventListener("change", async (event) => {
  // event.target.value -> animal seleccionado
  const { imagen, sonido } = await funcionAutoejecudable.obtenerDataJson(event.target.value);
  const nombreAnimal = event.target.value;

  // imagen -> 'Aullido.jpg'
  const preview = document.getElementById('preview') // Seleccionamos contenedor imagen
  preview.innerHTML = ''; // limpiamos el contenedor
  const img = document.createElement('img'); // creamos elemento "en el aire"
  img.src = `assets/imgs/${imagen}`; // definimos atributo src de la imagen
  img.className = ("img-fluid rounded"); // definimos clases de bootstrap
  img.alt = nombreAnimal; // propiedad alt
  preview.appendChild(img); // re
})


