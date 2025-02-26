document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos
    const verMasBtn = document.getElementById("ver-mas");
    const heroSection = document.getElementById("hero");
    const placesSection = document.getElementById("places");
  
    // Al hacer clic en "Ver más", ocultar hero y mostrar tarjetas + barras
    verMasBtn.addEventListener("click", () => {
      // Oculta Hero
      heroSection.classList.add("hidden");
      // Muestra Tarjetas
      placesSection.classList.remove("hidden");
  
      // Inicializar barras de progreso
      initProgressBars();
    });
  
    // Función para animar las barras de progreso
    function initProgressBars() {
      const progressFills = document.querySelectorAll(".progress-fill");
      progressFills.forEach(fill => {
        // Leer el porcentaje desde data-attribute
        const percentage = fill.getAttribute("data-percentage");
        // Aplicar una pequeña demora para que se vea la animación
        setTimeout(() => {
          fill.style.width = percentage + "%";
        }, 300);
      });
    }
  
    // Efecto al hacer clic en las tarjetas
    const places = document.querySelectorAll(".place");
    places.forEach(place => {
      place.addEventListener("click", () => {
        // Agregar clase de resaltado
        place.classList.add("highlight");
  
        // Mostrar descripción (si estaba oculta)
        const description = place.querySelector(".description");
        if (description) {
          description.style.display = "block";
        }
  
        // Después de 10 segundos, ocultar la descripción y quitar resaltado
        setTimeout(() => {
          if (description) {
            description.style.display = "none";
          }
          place.classList.remove("highlight");
        }, 10000);
      });
    });
  });
  