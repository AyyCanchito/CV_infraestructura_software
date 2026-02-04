// script.js 

console.log("script.js cargado - toggle simple");

// SALUDO
function mostrarSaludo() {
const saludoElem = document.getElementById("saludo");

if (!saludoElem) return;
const hora = new Date().getHours();
let mensaje = "";

if (hora >= 6 && hora < 12) mensaje = "Buenos días";

else if (hora >= 12 && hora < 18) mensaje = "Buenas tardes";

else mensaje = "Buenas noches";

saludoElem.textContent = mensaje;
}

// Display de las tablas
function setupTogglesSimple() {
const toggles = document.querySelectorAll(".toggle-btn");
if (!toggles.length) console.warn("No se encontraron botones .toggle-btn");

toggles.forEach(btn => {
const targetId = btn.getAttribute("data-target");
const target = document.getElementById(targetId);
if (!target) {
    console.warn("Toggle target no encontrado:", targetId);
    return;
}

// Aria expanded
const expandedAttr = btn.getAttribute("aria-expanded");
if (expandedAttr === "false") {
    target.classList.add("collapsed");
    btn.textContent = "Desplegar";
} else {
    target.classList.remove("collapsed");
    btn.textContent = "Ocultar";
}

btn.addEventListener("click", () => {
    const isCollapsed = target.classList.toggle("collapsed");
    btn.setAttribute("aria-expanded", (!isCollapsed).toString());
    btn.textContent = isCollapsed ? "Desplegar" : "Ocultar";
});
});
}

document.addEventListener("DOMContentLoaded", () => {
mostrarSaludo();
setupTogglesSimple();
});
