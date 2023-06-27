import { flechas } from "./constantes";
import { peliculas } from "./datos";
import { Pelicula, nombreClases, TipoFlecha } from "./modelo";

const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
  const titulo = document.createElement("h2");
  titulo.textContent = tituloSeccion;
  return titulo;
};

const crearContenedor = (
  nombreClase: string,
  contenedor: HTMLDivElement
): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add(nombreClase);
  div.id = nombreClase;
  contenedor.appendChild(div);
  return div;
};

const agregarTitulo = (
  tituloSeccion: string,
  contenedor: HTMLDivElement
): void => {
  const titulo = crearTitulo(tituloSeccion);
  contenedor.appendChild(titulo);
};

export const pintarListaPeliculas = (
  tituloSeccion: string,
  listaPeliculas: Pelicula[]
): void => {
  // obtener el div principal
  const appDiv = document.getElementById("principal");
  // comprobar que existe
  if (appDiv && appDiv instanceof HTMLDivElement) {
    // crear un div para las películas
    const creaDivPeliculas = crearContenedor(nombreClases.pelicula, appDiv);
    agregarTitulo(tituloSeccion, creaDivPeliculas);
    // crear div lista de peliculas
    const divListaPeliculas = crearContenedor(
      nombreClases.listaPeliculas,
      creaDivPeliculas
    );
    // crear div contenedor de películas
    const divPeliculasContenedor = crearContenedor(
      nombreClases.peliculasContenedor,
      divListaPeliculas
    );
    // añadir flechas
    pintarFlechas(divPeliculasContenedor);
    // pintar películas
    pintarPeliculas(listaPeliculas, divPeliculasContenedor);
  } else {
    console.error("No se encontró el elemento");
  }
};

const añadirFlecha = (contenedor: HTMLDivElement, tipo: TipoFlecha): void => {
  const divFlecha = document.createElement("div");
  divFlecha.className = `flecha-${tipo}`;
  const imgFlecha = document.createElement("img");
  imgFlecha.src = tipo === "izquierda" ? flechas.left : flechas.right;
  divFlecha.appendChild(imgFlecha);
  divFlecha.addEventListener("click", () => {
    if (tipo === "izquierda") {
      contenedor.scrollBy({
        left: -contenedor.clientWidth,
        behavior: "smooth",
      });
    } else {
      contenedor.scrollBy({
        left: contenedor.clientWidth,
        behavior: "smooth",
      });
    }
  });
  contenedor.appendChild(divFlecha);
};

const pintarFlechas = (peliculaContenedor: HTMLDivElement): void => {
  añadirFlecha(peliculaContenedor, "izquierda");
  añadirFlecha(peliculaContenedor, "derecha");
};

const pintarPeliculas = (
  pelicula: Pelicula,
  peliculaContenedor: HTMLDivElement
): void => {
  const divPelicula = crearContenedor(
    nombreClases.pelicula,
    peliculaContenedor
  );
  divPelicula.innerHTML = `
<img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
<h3>${pelicula.titulo}</h3>
`;
};
