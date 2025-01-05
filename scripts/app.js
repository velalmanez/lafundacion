document.addEventListener('DOMContentLoaded', () => {
    // Función para cargar contenido dinámico
    const cargarContenido = (pagina) => {
        const contenido = document.getElementById('main-container');
        fetch(pagina)
            .then((response) => {
                if (!response.ok) throw new Error(`Error: ${response.statusText}`);
                return response.text();
            })
            .then((html) => {
                contenido.innerHTML = html; // Inserta el contenido dinámico
            })
            .catch((error) => {
                contenido.innerHTML = `<p>Error al cargar la página: ${error.message}</p>`;
            });
    };

    // Cargar la página inicial
    cargarContenido('/secciones/inicio.php');

    // Delegar eventos a los enlaces del menú
    document.querySelectorAll('.section-link').forEach((enlace) => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault(); // Evita la recarga de la página
            const pagina = enlace.getAttribute('data-pagina'); // Obtén la página a cargar
            cargarContenido(pagina);
        });
    });
});

function onChangeSection (page_name){
    event.preventDefault();
    document.title = page_name;
}