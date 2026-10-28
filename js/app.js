/* ============================================================
   APP.JS - Index
   - Descarga de CV
   - Carga de proyectos destacados desde Google Sheets (pestaña "home")
   ============================================================ */

// ---------- DESCARGA CV ----------
const btnCV = document.getElementById("descargarCV");
if (btnCV) {
    btnCV.addEventListener("click", () => {
        const enlace = document.createElement("a");
        enlace.href = "../resources/HDV_Julian_Vargas.pdf";
        enlace.download = "Hoja_De_Vida_Julian_Vargas.pdf";
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    });
}

const btnCVCampus = document.getElementById("descargarCVCampus");
if (btnCVCampus) {
    btnCVCampus.addEventListener("click", () => {
        const enlace = document.createElement("a");
        enlace.href = "../resources/HDV_Julian_Vargas_Campuslands.pdf";
        enlace.download = "HDV_Julian_Vargas_Campuslands.pdf";
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    });
}

// ---------- PROYECTOS DESTACADOS DESDE SHEETS (pestaña home, gid=1782576942) ----------
const SHEET_HOME_URL =
    'https://docs.google.com/spreadsheets/d/10Fp5c4QL88FBMxbUiVAPQF_OWogXtZNodX64ijsbUAE/gviz/tq?tqx=out:json&gid=1782576942';

const listaProyectos = document.getElementById("proyectos-lista");

async function cargarProyectosHome() {
    if (!listaProyectos) return;

    try {
        const respuesta = await fetch(SHEET_HOME_URL);
        const texto = await respuesta.text();
        const jsonString = texto.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);
        const filas = data.table.rows; // sin encabezado en el Sheet

        const proyectos = filas
            .map(fila => ({
                nombre:   fila.c[0]?.v || "",
                linkRepo: fila.c[1]?.v || "#",
            }))
            .filter(p => p.nombre)
            .slice(0, 5); // máximo 5 para mantener la pirámide

        if (proyectos.length === 0) {
            listaProyectos.innerHTML =
                "<p style='color:#aaa;padding:10px 0'>No hay proyectos cargados aún.</p>";
            return;
        }

        listaProyectos.innerHTML = "";

        proyectos.forEach(({ nombre, linkRepo }) => {
            const card = document.createElement("div");
            card.className = "item-card";

            const enlace = document.createElement("a");
            enlace.href = linkRepo;
            enlace.target = "_blank";
            enlace.rel = "noopener noreferrer";

            const img = document.createElement("img");
            img.src = "../resources/githubLog.jpg";
            img.alt = `GitHub - ${nombre}`;

            const span = document.createElement("span");
            span.textContent = nombre;

            enlace.appendChild(img);
            enlace.appendChild(span);
            card.appendChild(enlace);
            listaProyectos.appendChild(card);
        });

    } catch (error) {
        listaProyectos.innerHTML =
            "<p style='color:#aaa;padding:10px 0'>No se pudieron cargar los proyectos.</p>";
        console.error("Error cargando proyectos home:", error);
    }
}

cargarProyectosHome();
