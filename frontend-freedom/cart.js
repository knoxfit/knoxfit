const produtos = [
    { id: 1, title: "Camiseta Estampada Branca", price: 89.90, image: "assets/Camiseta-Estampada-Branca.jpg" },
    { id: 2, title: "Calça Unissex Preta", price: 159.90, image: "assets/Calça-Jeans-Preta.jpg" },
    { id: 3, title: "Tênis Casual Preto", price: 229.90, image: "assets/Tênis-Casual-Preto.jpg" },
    { id: 4, title: "Blazer Slim Cinza", price: 349.90, image: "assets/Blazer-Slim-Cinza.jpg" },
    { id: 5, title: "Moletom Comfort Cinza", price: 129.90, image: "assets/Moletom-Comfort-Cinza.jpg" },
    { id: 6, title: "Camisa Social Azul Marinho", price: 179.90, image: "assets/Camisa-Social-Azul-Marinho.jpg" },
    { id: 7, title: "Bermuda Jeans Preta", price: 79.90, image: "assets/Bermuda-Jeans-Preta.jpg" },
    { id: 8, title: "Jaqueta Corta Vento", price: 199.90, image: "assets/Jaqueta-Corta-Vento.jpg" }
  ];
  
  let carrinho = [];
  
  function renderProdutos() {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    produtos.forEach(produto => {
      const div = document.createElement("div");
      div.innerHTML = `
        <img src="${produto.image}" width="100"><br>
        <strong>${produto.title}</strong><br>
        R$ ${produto.price.toFixed(2)}<br>
        <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao carrinho</button>
      `;
      container.appendChild(div);
    });
  }
  
  function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    atualizarCarrinho();
  }
  
  function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
  }
  
  function atualizarCarrinho() {
    const container = document.getElementById("cart-container");
    container.innerHTML = "";
  
    if (carrinho.length === 0) {
      container.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart-icon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <h3 class="empty-cart-message">Seu carrinho está vazio</h3>
          <a href="#" class="shop-btn">Continuar comprando</a>
        </div>
      `;
      document.getElementById("cart-total").innerText = "";
      return;
    }
  
    carrinho.forEach((item, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <img src="${item.image}" width="60">
        ${item.title} - R$ ${item.price.toFixed(2)}
        <button onclick="removerDoCarrinho(${index})">Remover</button>
      `;
      container.appendChild(div);
    });
  
    const total = carrinho.reduce((soma, item) => soma + item.price, 0);
    document.getElementById("cart-total").innerText = `Total: R$ ${total.toFixed(2)}`;
  }
  
  renderProdutos();
  