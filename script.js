
// Banco de dados com imagens embutidas (Base64)
const PRODUTOS = [
    { 
        nome: "Gloss Glambox Pink", 
        preco: "R$ 44,90", 
        // Este código longo é a própria imagem transformada em texto
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" 
    },
    { 
        nome: "Base Real Filter", 
        preco: "R$ 89,90", 
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
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
