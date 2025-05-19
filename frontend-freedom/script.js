document.addEventListener('DOMContentLoaded', function() {
  const products = [
      {
          id: 1,
          title: "Camiseta Estampada Branca",
          price: 89.90,
          oldPrice: 119.90,
          image: "assets/Camiseta-Estampada-Branca.jpg",
          hoverImage: "assets/Camiseta-Estampada-Branca-hoover.jpg",
          isWishlist: false
      },
      {
          id: 2,
          title: "Calça Unissex Preta",
          price: 159.90,
          oldPrice: 199.90,
          image: "assets/Calça-Jeans-Preta.jpg",
          hoverImage: "assets/Calça-Jeans-Preta-hoover.jpg",
          isWishlist: false
      },
      {
          id: 3,
          title: "Tênis Casual Preto",
          price: 229.90,
          oldPrice: 279.90,
          image: "assets/Tênis-Casual-Preto.jpg",
          hoverImage: "assets/Tênis-Casual-Preto-hoover.jpg",
          isWishlist: false
      },
      {
          id: 4,
          title: "Blazer Slim Cinza",
          price: 349.90,
          oldPrice: 399.90,
          image: "assets/Blazer-Slim-Cinza.jpg",
          hoverImage: "assets/Blazer-Slim-Cinza-Hoover.jpg",
          isWishlist: false
      },
      {
          id: 5,
          title: "Moletom Comfort Cinza",
          price: 129.90,
          oldPrice: 159.90,
          image: "assets/Moletom-Comfort-Cinza.jpg",
          hoverImage: "assets/Moletom-Comfort-Cinza-hoover.jpg",
          isWishlist: false
      },
      {
          id: 6,
          title: "Camisa Social Azul Marinho",
          price: 179.90,
          oldPrice: 219.90,
          image: "assets/Camisa-Social-Azul-Marinho.jpg",
          hoverImage: "assets/Camisa-Social-Azul-Marinho-hoover.jpg",
          isWishlist: false
      },
      {
          id: 7,
          title: "Bermuda Jeans Preta",
          price: 79.90,
          oldPrice: 99.90,
          image: "assets/Bermuda-Jeans-Preta.jpg",
          hoverImage: "assets/Bermuda-Jeans-Preta-hoover.jpg",
          isWishlist: false
      },
      {
          id: 8,
          title: "Jaqueta Corta Vento",
          price: 199.90,
          oldPrice: 249.90,
          image: "assets/Jaqueta-Corta-Vento.jpg",
          hoverImage: "assets/Jaqueta-Corta-Vento-hoover.jpg",
          isWishlist: false
      }
  ];

  const carouselTrack = document.querySelector('.carousel-track');
  const productsGrid = document.querySelector('.products-grid');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const productWidth = 270; 
  let currentPosition = 0;

  function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img class="main-image" src="${product.image}" alt="${product.title}">
                <img class="hover-image" src="${product.hoverImage}" alt="${product.title}">
                <div class="product-wishlist ${product.isWishlist ? 'active' : ''}">
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    R$ ${product.price.toFixed(2)}
                    <span class="old-price">R$ ${product.oldPrice.toFixed(2)}</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart">Adicionar</button>
                </div>
            </div>
        </div>
    `;
}


  function initCarousel() {
    carouselTrack.innerHTML = '';

    
    const lastItems = products.slice(-3);
    lastItems.forEach(product => {
        carouselTrack.innerHTML += createProductCard(product);
    });


    products.forEach(product => {
        carouselTrack.innerHTML += createProductCard(product);
    });

    const firstItems = products.slice(0, 3);
    firstItems.forEach(product => {
        carouselTrack.innerHTML += createProductCard(product);
    });

    currentPosition = -productWidth * 3;
    carouselTrack.style.transform = `translateX(${currentPosition}px)`;
}


  function initProductsGrid() {
      productsGrid.innerHTML = '';
      products.forEach(product => {
          productsGrid.innerHTML += createProductCard(product);
      });
  }

  function moveCarousel(direction) {
    const totalRealItems = products.length;
    const totalItems = document.querySelectorAll('.product-card').length;

    if (direction === 'next') {
        currentPosition -= productWidth;
        carouselTrack.style.transition = 'transform 0.5s ease';
        carouselTrack.style.transform = `translateX(${currentPosition}px)`;

        setTimeout(() => {
            if (Math.abs(currentPosition) >= productWidth * (totalRealItems + 3)) {
                
                carouselTrack.style.transition = 'none';
                currentPosition = -productWidth * 3;
                carouselTrack.style.transform = `translateX(${currentPosition}px)`;
            }
        }, 500);
    } else {
        currentPosition += productWidth;
        carouselTrack.style.transition = 'transform 0.5s ease';
        carouselTrack.style.transform = `translateX(${currentPosition}px)`;

        setTimeout(() => {
            if (currentPosition === 0) {
                carouselTrack.style.transition = 'none';
                currentPosition = -productWidth * (totalRealItems);
                carouselTrack.style.transform = `translateX(${currentPosition}px)`;
            }
        }, 500);
    }
}


  prevBtn.addEventListener('click', () => moveCarousel('prev'));
  nextBtn.addEventListener('click', () => moveCarousel('next'));

  document.addEventListener('click', function(e) {
      if (e.target.closest('.product-wishlist')) {
          const wishlistBtn = e.target.closest('.product-wishlist');
          wishlistBtn.classList.toggle('active');
          
         
          const productId = parseInt(wishlistBtn.closest('.product-card').dataset.id);
          const productIndex = products.findIndex(p => p.id === productId);
          if (productIndex !== -1) {
              products[productIndex].isWishlist = wishlistBtn.classList.contains('active');
          }
      }
      
      if (e.target.closest('.add-to-cart')) {
          const productId = parseInt(e.target.closest('.product-card').dataset.id);
          const product = products.find(p => p.id === productId);
          alert(`Produto "${product.title}" adicionado ao carrinho!`);
      }
  });

  
  initCarousel();
  initProductsGrid();

  let autoSlide = setInterval(() => moveCarousel('next'), 5000);
  carouselTrack.addEventListener('mouseenter', () => clearInterval(autoSlide));
  carouselTrack.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => moveCarousel('next'), 5000);
  });
});