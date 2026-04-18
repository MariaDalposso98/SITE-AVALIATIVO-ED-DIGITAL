
// Banco de dados com imagens embutidas (Base64)
const PRODUTOS = [
    { 
        nome: "Gloss Glambox Pink", 
        preco: "R$ 44,90", 
        // Este código longo é a própria imagem transformada em texto
        img: "https://m.media-amazon.com/images/I/517iC2D-3rL._AC_SL1000_.jpg" 
    },
    { 
        nome: "Base Real Filter", 
        preco: "R$ 89,90", 
        img: "https://m.media-amazon.com/images/I/51+x-X-e0YL._AC_SL1000_.jpg"
    }
];

function render() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;

    grid.innerHTML = PRODUTOS.map(p => `
        <div class="product-card reveal">
            <div style="width:100%; height:300px; background:#ff4d94; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; border-radius:8px;">
                FOTO DO PRODUTO
            </div>
            <h3>${p.nome}</h3>
            <p class="product-price">${p.preco}</p>
        </div>
    `).join('');
}

// Inicialização e Scroll
window.onload = () => {
    render();
    handleScroll();
};

function handleScroll() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add('active');
    });
}
