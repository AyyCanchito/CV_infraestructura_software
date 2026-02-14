console.log("script.js cargado (inicio)");

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

// Botones para el display de las tablas
function setupTogglesSimple() {
const toggles = document.querySelectorAll(".toggle-btn");
toggles.forEach(btn => {
const targetId = btn.getAttribute("data-target");
const target = document.getElementById(targetId);
if (!target) {
    console.warn("Toggle target no encontrado:", targetId);
    return;
}
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

// --- Buscador de habilidades ---
function setupSkillSearch() {
const input = document.getElementById("skill-search");
const ul = document.getElementById("habilidades-list");
if (!input || !ul) {
    console.warn("Buscador de habilidades: elementos no encontrados");
    return;
}

const items = Array.from(ul.querySelectorAll("li"));

// Filtrado 
input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (q === "") {
    // mostrar 
    items.forEach(li => li.classList.remove("habilidad-hidden"));
    return;
    }

    items.forEach(li => {
    const text = li.textContent.trim().toLowerCase();
    const match = text.includes(q);
    li.classList.toggle("habilidad-hidden", !match);
    });
});
}

// Modo OSCURO 
const THEME_KEY = "mi_cv_theme";

function updateButtonText(isDark) {
const btn = document.getElementById("btn-darkmode");
if (!btn) return;
btn.setAttribute("aria-pressed", isDark.toString());
btn.textContent = isDark ? "Desactivar modo oscuro" : "Activar modo oscuro";
}

function applyTheme(isDark, save = true) {
if (isDark) document.body.classList.add("dark-mode");
else document.body.classList.remove("dark-mode");
updateButtonText(isDark);
if (save) localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
console.log("Tema aplicado:", isDark ? "dark" : "light");
}

function setupDarkModeButton() {
const btn = document.getElementById("btn-darkmode");
if (!btn) {
console.warn("Botón #btn-darkmode no encontrado en el DOM.");
return;
}
btn.addEventListener("click", () => {
const isDarkNow = document.body.classList.contains("dark-mode");
applyTheme(!isDarkNow, true);
});
}

function initThemeFromStorageOrSystem() {
const saved = localStorage.getItem(THEME_KEY);
if (saved === "dark") { applyTheme(true, false); return; }
if (saved === "light") { applyTheme(false, false); return; }
// Si no hay guardado, usar preferencia del sistema
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(prefersDark, false);
}

// EL DOM LISTO
document.addEventListener("DOMContentLoaded", () => {
console.log("DOMContentLoaded fired");
mostrarSaludo();
setupTogglesSimple();
initThemeFromStorageOrSystem();
setupDarkModeButton();
setupSkillSearch();
});
