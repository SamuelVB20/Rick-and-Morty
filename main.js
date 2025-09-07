const url = 'https://rickandmortyapi.com/api/character';

// Función para obtener los personajes
const obtenerPersonajes = async () => {
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data.results.map(personaje => ({
      id: personaje.id,
      name: personaje.name,
      status: personaje.status,
      species: personaje.species,
      gender: personaje.gender,
      image: personaje.image
    }));
  } catch (error) {
    console.log('Error al obtener personajes:', error);
    return [];
  } finally {
    console.log('Proceso terminado');
  }
};

// Función para mostrarlos en el HTML
const mostrarPersonajes = async () => {
  const personajes = await obtenerPersonajes();
  const section = document.getElementById("contenedor");
  let html = "";

  personajes.forEach(personaje => {
    html += `
      <div class="card" id="${personaje.name}">
        <img src="${personaje.image}" alt="${personaje.name}">
        <h2>${personaje.name}</h2>
        <p>Estado: ${personaje.status}</p>
        <p>Especie: ${personaje.species}</p>
        <p>Género: ${personaje.gender}</p>
      </div>
    `;
  });

  section.innerHTML = html;
};

mostrarPersonajes();