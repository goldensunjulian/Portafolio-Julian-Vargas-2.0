const btnCV = document.getElementById("descargarCV");

if (btnCV) {
    btnCV.addEventListener("click", () => {
        const rutaCV = "../resources/HDV_Julian_Vargas.pdf";
        const enlace = document.createElement("a");
        enlace.href = rutaCV;
        enlace.download = "Hoja_De_Vida_Julian_Vargas.pdf";

        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    });
}

const btnCVCampus = document.getElementById("descargarCVCampus");

if (btnCVCampus) {
    btnCVCampus.addEventListener("click", () => {
        const rutaCVCampus = "../resources/HDV_Julian_Vargas_Campuslands.pdf";

        const enlace = document.createElement("a");
        enlace.href = rutaCVCampus;
        enlace.download = "HDV_Julian_Vargas_Campuslands.pdf";

        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    });
}