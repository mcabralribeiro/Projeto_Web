function mostrarCarrinho() {
    // Aqui você pode fazer uma requisição AJAX para obter os itens do carrinho do backend
    // Por enquanto, usaremos um array de exemplo para simular os itens
    const itensDoCarrinho = [
        { id: 1, nome: 'Bicicleta', quantidade: 2 },
        { id: 2, nome: 'Capacete', quantidade: 1 },
    ];

    const cartCount = document.getElementById('cart-count');
    let totalItems = 0;

    // Aqui você pode calcular o número total de itens no carrinho
    for (const item of itensDoCarrinho) {
        totalItems += item.quantidade;
    }

    // Atualize a contagem no ícone do carrinho
    cartCount.textContent = totalItems;
}
