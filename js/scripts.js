const games = [
  {
    nombre: "Catan",
    precio: 22990,
    valoracion: 4.5,
    oferta: false,
    img: "img/catan.jpeg",
    esencial: true,
    categoria: "familiar"
  },
  {
    nombre: "Calabozos y Dragones",
    precio: 23990,
    valoracion: 5,
    oferta: true,
    precioOriginal: 28990,
    img: "img/dungeons.jpeg",
    esencial: true,
    categoria: "cooperativo"
  },
  {
    nombre: "Código Secreto",
    precio: 13990,
    valoracion: 4.5,
    oferta: true,
    precioOriginal: 19990,
    img: "img/codigosecreto.jpeg",
    esencial: false,
    categoria: "otros"
  },
  {
    nombre: "Dixit",
    precio: 29990,
    valoracion: 4,
    oferta: false,
    img: "img/dixit.webp",
    esencial: true,
    categoria: "aventura"
  },
  {
    nombre: "Gloomhaven",
    precio: 99990,
    valoracion: 5,
    oferta: true,
    precioOriginal: 129990,
    img: "img/gloomhaven.jpg",
    esencial: true,
    categoria: "cooperativo"
  },
  {
    nombre: "3 Ring Circus",
    precio: 31990,
    valoracion: 4,
    oferta: false,
    img: "img/3ringcircus.jpg",
    esencial: true,
    categoria: "solitario"
  },
  {
    nombre: "7 Wonders",
    precio: 41990,
    valoracion: 4.5,
    oferta: true,
    precioOriginal: 47990,
    img: "img/7wonders.jpeg",
    esencial: true,
    categoria: "estrategia"
  },
  {
    nombre: "Nemesis",
    precio: 149990,
    valoracion: 5,
    oferta: false,
    img: "img/nemesis.jpg",
    esencial: true,
    categoria: "estrategia"
  },
  {
    nombre: "5 Minutes Dungeon",
    precio: 14990,
    valoracion: 4.5,
    oferta: false,
    img: "img/5mindungeon.jpeg",
    esencial: false,
    categoria: "cooperativo"
  },
  {
    nombre: "Alice Ha Desaparecido",
    precio: 22990,
    valoracion: 5,
    oferta: false,
    img: "img/alice.jpeg",
    esencial: false,
    categoria: "cooperativo"
  },
  {
    nombre: "Andor",
    precio: 19990,
    valoracion: 4,
    oferta: false,
    img: "img/andor.jpg",
    esencial: false,
    categoria: "aventura"
  },
  {
    nombre: "Arkham Horror",
    precio: 43490,
    valoracion: 5,
    oferta: false,
    img: "img/arkham-horror.jpeg",
    esencial: false,
    categoria: "aventura"
  },
  {
    nombre: "Celestia",
    precio: 30990,
    valoracion: 3.5,
    oferta: false,
    img: "img/celestia.jpeg",
    esencial: false,
    categoria: "aventura"
  },
  {
    nombre: "Clank! - Catacumbas",
    precio: 32290,
    valoracion: 4,
    oferta: false,
    img: "img/clank.webp",
    esencial: false,
    categoria: "aventura"
  },
  {
    nombre: "Abyss",
    precio: 40240,
    valoracion: 4.5,
    oferta: false,
    img: "img/abyss.png",
    esencial: false,
    categoria: "estrategia"
  },
  {
    nombre: "¡Resistid!",
    precio: 21990,
    valoracion: 4,
    precioOriginal: 29990,
    oferta: true,
    img: "img/resistid.jpeg",
    esencial: false,
    categoria: "estrategia"
  },
  {
    nombre: "Carnegie",
    precio: 57990,
    valoracion: 5,
    precioOriginal: 67490,
    oferta: true,
    img: "img/carnegie.jpeg",
    esencial: false,
    categoria: "solitario"
  },
  {
    nombre: "Caverna",
    precio: 22390,
    valoracion: 4,
    oferta: false,
    img: "img/caverna.jpeg",
    esencial: false,
    categoria: "solitario"
  },
  {
    nombre: "Imperium: Legendarios",
    precio: 25290,
    valoracion: 3.5,
    oferta: false,
    img: "img/imperium.jpeg",
    esencial: false,
    categoria: "solitario"
  },
  {
    nombre: "Bamboo",
    precio: 23290,
    valoracion: 5,
    oferta: false,
    img: "img/bamboo.jpeg",
    esencial: true,
    categoria: "familiar"
  },
  {
    nombre: "Catan: Navegantes",
    precio: 34490,
    valoracion: 5,
    oferta: false,
    img: "img/catan-navegantes.jpeg",
    esencial: false,
    categoria: "familiar"
  },
  {
    nombre: "Century",
    precio: 34490,
    valoracion: 5,
    oferta: false,
    img: "img/century.jpeg",
    esencial: false,
    categoria: "familiar"
  },
  {
    nombre: "Carcassonne",
    precio: 29990,
    valoracion: 4.5,
    oferta: false,
    img: "img/carcassonne.jpeg",
    esencial: false,
    categoria: "otros"
  },
  {
    nombre: "Bienvenido a la Mazmorra",
    precio: 13990,
    valoracion: 4,
    oferta: false,
    img: "img/mazmorra.jpeg",
    esencial: false,
    categoria: "otros"
  },
  {
    nombre: "Ishtar: Jardines de Babilonia",
    precio: 23390,
    valoracion: 5,
    oferta: false,
    img: "img/ishtar.jpeg",
    esencial: false,
    categoria: "otros"
  }
];

const cart = [];

function formatearPrecio(precio) {
  return `$${precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

function addToCart(game) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingCartItemIndex = cart.findIndex(item => item.nombre === game.nombre);

  if (existingCartItemIndex !== -1) {
    cart[existingCartItemIndex].cantidad += 1;
    cart[existingCartItemIndex].total = cart[existingCartItemIndex].cantidad * cart[existingCartItemIndex].precio;
  } else {
    const newCartItem = { ...game, cantidad: 1, total: game.precio };
    cart.push(newCartItem);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-count').textContent = cart.length;
}

function removeFromCart(game) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(cartItem => cartItem.nombre !== game.nombre);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  displayCartItems();
}

function clearCart() {
  localStorage.removeItem('cart');
  displayCartItems();
  updateCartCount();
}

function handlePayButtonClick() {
  const payButton = document.getElementById('pay-button');

  if (!payButton) return;

  payButton.addEventListener('click', function() {
      alert('Gracias por tu compra');
      clearCart();
      window.location.href = 'index.html';
  });
}

function createCards(id, games) {
  const gameContainer = document.getElementById(id);

  if (!gameContainer) return;

  games.forEach(game => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col mb-5';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card h-100';

    if (game.oferta) {
      const badgeDiv = document.createElement('div');
      badgeDiv.className = 'badge bg-dark text-white position-absolute';
      badgeDiv.style.top = '0.5rem';
      badgeDiv.style.right = '0.5rem';
      badgeDiv.textContent = 'Oferta';
      cardDiv.appendChild(badgeDiv);
    }

    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = game.img;
    img.alt = game.nombre;
    cardDiv.appendChild(img);

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body p-4';

    const textCenterDiv = document.createElement('div');
    textCenterDiv.className = 'text-center';

    const h5 = document.createElement('h5');
    h5.className = 'fw-bolder';
    h5.textContent = game.nombre;
    textCenterDiv.appendChild(h5);

    const starDiv = document.createElement('div');
    starDiv.className = 'd-flex justify-content-center small text-warning mb-2';

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('div');
      if (i <= Math.floor(game.valoracion)) {
        star.className = 'bi-star-fill';
      } else if (i === Math.ceil(game.valoracion) && !Number.isInteger(game.valoracion)) {
        star.className = 'bi-star-half';
      } else {
        star.className = 'bi-star';
      }
      starDiv.appendChild(star);
    }
    textCenterDiv.appendChild(starDiv);

    if (game.oferta) {
      const spanOriginal = document.createElement('span');
      spanOriginal.className = 'text-muted text-decoration-line-through me-1';
      spanOriginal.textContent = formatearPrecio(game.precioOriginal);
      textCenterDiv.appendChild(spanOriginal);
    }

    const spanPrecio = document.createElement('span');
    spanPrecio.textContent = formatearPrecio(game.precio);
    textCenterDiv.appendChild(spanPrecio);

    cardBodyDiv.appendChild(textCenterDiv);
    cardDiv.appendChild(cardBodyDiv);

    const cardFooterDiv = document.createElement('div');
    cardFooterDiv.className = 'card-footer p-4 pt-0 border-top-0 bg-transparent';
    const footerCenterDiv = document.createElement('div');
    footerCenterDiv.className = 'text-center';
    const btn = document.createElement('a');
    btn.className = 'btn btn-outline-dark mt-auto';
    btn.href = '#';
    btn.textContent = 'Agregar al carrito';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(game);
    });
    footerCenterDiv.appendChild(btn);
    cardFooterDiv.appendChild(footerCenterDiv);
    cardDiv.appendChild(cardFooterDiv);

    colDiv.appendChild(cardDiv);
    gameContainer.appendChild(colDiv);
  })
}

function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-container');
  const cartTotalElement = document.getElementById('cart-total');

  if (!cartContainer) return;

  let cartTotal = 0;

  cartContainer.innerHTML = '';

  cart.forEach(game => {
    cartTotal += game.total;

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card mb-3';

    const rowDiv = document.createElement('div');
    rowDiv.className = 'row g-0';

    const imgColDiv = document.createElement('div');
    imgColDiv.className = 'col-md-4';

    const img = document.createElement('img');
    img.src = game.img;
    img.className = 'img-fluid rounded-start';
    img.alt = game.nombre;
    imgColDiv.appendChild(img);

    const contentColDiv = document.createElement('div');
    contentColDiv.className = 'col-md-8';

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';

    const h3 = document.createElement('h3');
    h3.className = 'card-title';
    h3.textContent = game.nombre;

    const quantityP = document.createElement('p');
    quantityP.className = 'card-text quantity mt-3';
    quantityP.textContent = `Cantidad: ${game.cantidad || 1}`;

    const priceP = document.createElement('p');
    priceP.className = 'card-text quantity';
    priceP.textContent = `Precio: ${formatearPrecio(game.precio)}`;

    const totalP = document.createElement('p');
    totalP.className = 'card-text quantity';
    totalP.textContent = `Total: ${formatearPrecio((game.cantidad || 1) * game.precio)}`;

    const btn = document.createElement('button');
    btn.className = 'btn btn-danger mt-4';
    btn.textContent = 'Eliminar';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      removeFromCart(game);
    });

    cardBodyDiv.appendChild(h3);
    cardBodyDiv.appendChild(quantityP);
    cardBodyDiv.appendChild(priceP);
    cardBodyDiv.appendChild(totalP);
    cardBodyDiv.appendChild(btn);

    contentColDiv.appendChild(cardBodyDiv);

    rowDiv.appendChild(imgColDiv);
    rowDiv.appendChild(contentColDiv);

    cardDiv.appendChild(rowDiv);

    cartContainer.appendChild(cardDiv);
  });

  cartTotalElement.textContent = `Total: ${formatearPrecio(cartTotal)}`;
}

createCards('essentials-container', games.filter(game => game.esencial));
createCards('adventure-container', games.filter(game => game.categoria === 'aventura'));
createCards('coop-container', games.filter(game => game.categoria === 'cooperativo'));
createCards('strategy-container', games.filter(game => game.categoria === 'estrategia'));
createCards('solitaire-container', games.filter(game => game.categoria === 'solitario'));
createCards('family-container', games.filter(game => game.categoria === 'familiar'));
createCards('others-container', games.filter(game => game.categoria === 'otros'));
createCards('sales-container', games.filter(game => game.oferta));
createCards('games-container', games.sort((a,b) => a.nombre.localeCompare(b.nombre)));

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  displayCartItems();
  handlePayButtonClick();
});