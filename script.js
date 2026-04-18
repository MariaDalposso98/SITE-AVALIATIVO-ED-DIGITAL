
// 1. GESTÃO DE DADOS (CONTEÚDO DINÂMICO)
const produtos = [
    { nome: "Gloss Glossip", desc: "Brilho intenso e hidratação." },
    { nome: "Base Real Filter", desc: "Alta cobertura e acabamento matte." },
    { nome: "Paleta de Sombras", desc: "Cores vibrantes para qualquer ocasião." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function renderizarProdutos() {
    const container = document.getElementById('grid-produtos');
    container.innerHTML = produtos.map(prod => `
        <article class="card">
            <h3>${prod.nome}</h3>
            <p>${prod.desc}</p>
        </article>
    `).join('');
}

// 3. ACESSIBILIDADE: FONTE E CONTRASTE
let currentFontSize = 16;

function changeFontSize(action) {
    const body = document.body;
    if (action === 'increase') currentFontSize += 2;
    if (action === 'decrease') currentFontSize -= 2;
    body.style.fontSize = currentFontSize + 'px';
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// 4. VISÃO SISTÊMICA: SCROLL REVEAL (INTERAÇÃO CSS + JS)
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(window => {
        const windowHeight = window.innerHeight;
        const revealTop = window.getBoundingClientRect().top;
        if (revealTop < 150) {
            window.classList.add("active");
        }
    });
}

// INICIALIZAÇÃO
window.addEventListener("scroll", reveal);
window.onload = () => {
    renderizarProdutos();
    reveal();
};
