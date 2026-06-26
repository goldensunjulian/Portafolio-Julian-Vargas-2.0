const btnCV = document.getElementById("descargarCV");

if (btnCV) {
    btnCV.addEventListener("click", () => {

        // Cambia esta ruta cuando tengas tu hoja de vida
        const rutaCV = "../resources/HojaDeVidaJulian.pdf";

        const enlace = document.createElement("a");
        enlace.href = rutaCV;
        enlace.download = "Hoja_De_Vida_Julian_Tristan.pdf";

        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    });
}