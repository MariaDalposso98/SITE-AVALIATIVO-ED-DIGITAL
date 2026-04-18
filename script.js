
const PRODUTOS = [
    { 
        nome: "Gloss Glambox Pink", 
        preco: "R$ 44,90", 
        img: "assets/https://dcdn-us.mitiendanube.com/stores/965/764/products/0995676503a1a0927562bdaea989ebeb-947ff5fe362cc53cec17207050077290-1024-1024.webp" 
    },
    { 
        nome: "Base Real Filter", 
        preco: "R$ 89,90", 
        img: "https://m.media-amazon.com/images/I/51+x-X-e0YL._AC_SL1000_.jpg" 
    },
    { 
        nome: "Paleta de Sombras Fran", 
        preco: "R$ 119,90", 
        img: "https://m.media-amazon.com/images/I/61kYyV7qT-L._AC_SL1200_.jpg" 
    },
    { 
        nome: "Pó Solto Invisible", 
        preco: "R$ 68,00", 
        img: "https://m.media-amazon.com/images/I/51C+uBOnH5L._AC_SL1000_.jpg" 
    }
];
function render() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = PRODUTOS.map(p => `
        <div class="product-card reveal">
            <img src="${p.img}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p class="product-price">${p.preco}</p>
        </div>
    `).join('');
}

// Animação de Scroll
function handleScroll() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}

// Acessibilidade
let fontSize = 16;
function adjustFont(type) {
    fontSize = (type === 'up') ? fontSize + 2 : 16;
    document.documentElement.style.setProperty('--fs-base', fontSize + 'px');
}

function toggleTheme() {
    document.body.classList.toggle('high-contrast');
}

window.onload = () => {
    render();
    handleScroll(); // Ativa para itens no topo
};

window.onscroll = handleScroll;
