
// 1. BANCO DE DADOS DOS PRODUTOS (Altere as URLs aqui)
const DATA = {
    branding: {
        bio_img: "URL_DA_FOTO_DA_FRANCINY.jpg"
    },
    products: [
        {
            nome: "Gloss Glambox Pink",
            preco: "R$ 42,90",
            img: "https://via.placeholder.com/400x500",
            tag: "Best Seller"
        },
        {
            nome: "Base Real Filter",
            preco: "R$ 89,00",
            img: "https://via.placeholder.com/400x500",
            tag: "Novo"
        },
        {
            nome: "Paleta de Sombras Fran",
            preco: "R$ 120,00",
            img: "https://via.placeholder.com/400x500",
            tag: "Premium"
        }
    ]
};

// 2. FUNÇÃO DE RENDERIZAÇÃO
function initApp() {
    const grid = document.getElementById('product-grid');
    
    const htmlProdutos = DATA.products.map(product => `
        <article class="card scroll-reveal">
            <div class="card__tag">${product.tag}</div>
            <img src="${product.img}" alt="${product.nome}">
            <div class="card__info">
                <h3>${product.nome}</h3>
                <p>${product.preco}</p>
                <button class="btn-buy">Comprar Agora</button>
            </div>
        </article>
    `).join('');

    grid.innerHTML = htmlProdutos;
}

// 3. ACESSIBILIDADE: TAMANHO DA FONTE
let fontSize = 16;
function changeFontSize(type) {
    fontSize = (type === 'increase') ? fontSize + 2 : fontSize - 2;
    document.documentElement.style.setProperty('--base-size', fontSize + 'px');
}

// 4. MODO CONTRASTE
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// 5. OBSERVERS (Para animações ao rolar a página)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// INICIALIZAÇÃO GERAL
window.addEventListener('DOMContentLoaded', () => {
    initApp();
    
    // Ativa animações
    setTimeout(() => {
        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    }, 100);
});
