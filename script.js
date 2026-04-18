
// 1. BANCO DE DADOS (Simulação de uma API)
const PRODUTOS = [
    {
        nome: "Gloss Glambox",
        preco: "R$ 44,90",
        img: "https://m.media-amazon.com/images/I/517iC2D-3rL._AC_SL1000_.jpg"
    },
    {
        nome: "Base Real Filter",
        preco: "R$ 89,90",
        img: "https://m.media-amazon.com/images/I/51+x-X-e0YL._AC_SL1000_.jpg"
    },
    {
        nome: "Paleta de Sombras",
        preco: "R$ 119,90",
        img: "https://m.media-amazon.com/images/I/61kYyV7qT-L._AC_SL1200_.jpg"
    },
    {
        nome: "Batom Líquido Matte",
        preco: "R$ 38,00",
        img: "https://m.media-amazon.com/images/I/51C+uBOnH5L._AC_SL1000_.jpg"
    }
];

// 2. FUNÇÃO PARA RENDERIZAR OS PRODUTOS NO HTML
function renderizarProdutos() {
    const grid = document.getElementById('product-grid');
    
    // Mapeia o array de objetos para código HTML
    const cardsHTML = PRODUTOS.map(produto => `
        <article class="card">
            <img src="${produto.img}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="price">${produto.preco}</p>
            <button class="btn-buy">Comprar Agora</button>
        </article>
    `).join(''); // Une tudo em uma única string

    grid.innerHTML = cardsHTML;
}

// 3. FUNÇÕES DE ACESSIBILIDADE
let fontBase = 16;

function adjustFont(direcao) {
    if (direcao === 'up') fontBase += 2;
    else fontBase -= 2;
    
    // Altera a variável --font-size no CSS em tempo real
    document.documentElement.style.setProperty('--font-size', fontBase + 'px');
}

function toggleTheme() {
    document.body.classList.toggle('high-contrast');
}

// 4. INICIALIZAÇÃO (Executa quando a página carrega)
window.onload = () => {
    console.log("Sistema Franciny Ehlke carregado com sucesso!");
    renderizarProdutos();
};
