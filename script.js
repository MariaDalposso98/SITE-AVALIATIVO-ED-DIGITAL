
const PRODUTOS = [
    { 
        nome: "Gloss Glambox Pink", 
        preco: "R$ 44,90", 
        img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=80&w=400" 
    },
    { 
        nome: "Base Real Filter", 
        preco: "R$ 89,90", 
        img: "https://images.unsplash.com/photo-1631730359585-38a4935ccbb2?auto=format&fit=crop&q=80&w=400" 
    },
    { 
        nome: "Paleta de Sombras Fran", 
        preco: "R$ 119,90", 
        img: "https://images.unsplash.com/photo-1512496011212-323704e6773a?auto=format&fit=crop&q=80&w=400" 
    },
    { 
        nome: "Pó Solto Invisible", 
        preco: "R$ 68,00", 
        img: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=400" 
    }
];

function render() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;

    grid.innerHTML = PRODUTOS.map(p => `
        <div class="product-card reveal">
            <img src="${p.img}" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/400x500?text=Imagem+Indisponivel'">
            <h3>${p.nome}</h3>
            <p class="product-price">${p.preco}</p>
        </div>
    `).join('');
}

// ... (mantenha o restante das funções handleScroll, adjustFont e toggleTheme iguais)
function handleScroll() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}

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
    handleScroll();
};

window.onscroll = handleScroll;
