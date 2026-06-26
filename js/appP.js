const SHEET_URL =
    'https://docs.google.com/spreadsheets/d/10Fp5c4QL88FBMxbUiVAPQF_OWogXtZNodX64ijsbUAE/gviz/tq?tqx=out:json&gid=0';

const contenedor = document.getElementById("proyectos");

async function cargarProyectos() {
    try {

        const respuesta = await fetch(SHEET_URL);
        const texto = await respuesta.text();

        const jsonString = texto.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);
        const filas = data.table.rows;

        const filasSinEncabezado = filas.slice(1);

        contenedor.innerHTML = "";

        filasSinEncabezado.forEach(fila => {

            const nombre = fila.c[0]?.v || "";
            const linkRepo = fila.c[1]?.v || "";
            const informacion = fila.c[2]?.v || "";

            if (!nombre) return;

            contenedor.innerHTML += `
        <div>
            <h1>${nombre}</h1>

            <a href="${linkRepo}" target="_blank">
                <img src="../resources/githubLog.jpg" alt="${nombre}">
            </a>

            <h4>${informacion}</h4>
        </div>
    `;
        });

    } catch (error) {
        console.error("Error:", error);
    }
}

cargarProyectos();