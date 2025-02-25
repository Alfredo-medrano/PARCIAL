document.addEventListener("DOMContentLoaded", () => {
    const verMasBtn = document.getElementById("ver-mas");
    const placesSection = document.getElementById("places");

    const mostrarTarjetas = () => {
        placesSection.classList.add("visible");
        placesSection.classList.remove("hidden");
        verMasBtn.classList.add("hidden");

        setTimeout(() => {
            placesSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);

        setTimeout(() => {
            placesSection.classList.remove("visible");
            placesSection.classList.add("hidden");
            setTimeout(() => {
                verMasBtn.classList.remove("hidden");
                verMasBtn.classList.add("visible");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 800); 
        }, 20000); 
    };

    verMasBtn.addEventListener("click", () => {
        mostrarTarjetas();
    });

    const places = document.querySelectorAll(".place");
    places.forEach(place => {
        place.addEventListener("mouseover", () => {
            place.querySelector("h2").style.color = "#ffcc00";
        });

        place.addEventListener("mouseout", () => {
            place.querySelector("h2").style.color = "#ffffff";
        });

        place.addEventListener("click", () => {
            const description = place.querySelector(".description");
            description.style.display = description.style.display === "none" ? "block" : "none";
        });
    });
});
