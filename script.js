
// GESTÃO DE DADOS (Dinamismo)
const produtos = [
    { nome: "Gloss Glambox", preco: "R$ 45,90", img: "url_da_imagem" },
    { nome: "Base Real Filter", preco: "R$ 89,90", img: "url_da_imagem" }
];

function renderizarProdutos() {
    const container = document.getElementById('grid-produtos');
    container.innerHTML = produtos.map(prod => `
        <article class="product-card scroll-reveal">
            <h3>${prod.nome}</h3>
            <p>${prod.preco}</p>
        </article>
    `).join('');
}

// ACESSIBILIDADE: TAMANHO DA FONTE
let currentSize = 16;
function changeFontSize(action) {
    if(action === 'increase') currentSize += 2;
    else if(action === 'decrease') currentSize -= 2;
    document.documentElement.style.setProperty('--font-base', `${currentSize}px`);
}

// ALTO CONTRASTE
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// INICIALIZAÇÃO
window.onload = () => {
    renderizarProdutos();
    // Lógica simples de Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    });
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
};
