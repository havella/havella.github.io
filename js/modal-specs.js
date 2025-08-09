// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".openSpecs");
  const closeButtons = document.querySelectorAll(".specs__close");

  // Abrir modal al hacer clic
  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.parentElement.nextElementSibling;
      if (modal) modal.style.display = "block";
    });
  });

  // Cerrar modal al hacer clic en la X
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".specs__modal");
      if (modal) modal.style.display = "none";
    });
  });

  // Cerrar al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("specs__modal")) {
      e.target.style.display = "none";
    }
  });
});
