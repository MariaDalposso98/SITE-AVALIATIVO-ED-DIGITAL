
// Dados de doações
const doacoes = [
    { tipo: 'Ração', descricao: 'Doe ração de qualidade para gatos resgatados.' },
    { tipo: 'Adote', descricao: 'Adote um gato resgatado e ofereça um lar amoroso.' },
    { tipo: 'Financeira', descricao: 'Doe dinheiro para cobrir despesas com tratamento veterinário.' }
];

// Função para renderizar as opções de doações
function renderizarDoacoes() {
    const listaDoacoes = document.getElementById('lista-doacoes');
    doacoes.forEach(doacao => {
        const div = document.createElement('div');
        div.classList.add('doacao-item');
        div.innerHTML = `
            <h3>${doacao.tipo}</h3>
            <p>${doacao.descricao}</p>
        `;
        listaDoacoes.appendChild(div);
    });
}

// Função para aumentar o tamanho da fonte
function aumentarFonte() {
    document.body.style.fontSize = '18px';
}

// Função para diminuir o tamanho da fonte
function diminuirFonte() {
    document.body.style.fontSize = '14px';
}

// Carrossel
let carrosselIndex = 0;
const carrosselItems = doacoes; // Usando os mesmos itens para o carrossel

function mostrarCarrossel() {
    const carrosselDiv = document.getElementById('lista-doacoes');
    carrosselDiv.innerHTML = `
        <h3>${carrosselItems[carrosselIndex].tipo}</h3>
        <p>${carrosselItems[carrosselIndex].descricao}</p>
    `;
    carrosselIndex = (carrosselIndex + 1) % carrosselItems.length;
}

setInterval(mostrarCarrossel, 3000); // Troca a cada 3 segundos

// Chamada da função para renderizar as doações
renderizarDoacoes();
