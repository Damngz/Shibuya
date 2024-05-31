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
    esencial: true,
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
];

function formatearPrecio(precio) {
  return `$${precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
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
    footerCenterDiv.appendChild(btn);
    cardFooterDiv.appendChild(footerCenterDiv);
    cardDiv.appendChild(cardFooterDiv);

    colDiv.appendChild(cardDiv);
    gameContainer.appendChild(colDiv);
  })
}

createCards('essentials-container', games.filter(game => game.esencial));
createCards('adventure-container', games.filter(game => game.categoria === 'aventura'));
createCards('coop-container', games.filter(game => game.categoria === 'cooperativo'));
createCards('strategy-container', games.filter(game => game.categoria === 'estrategia'));
createCards('solitaire-container', games.filter(game => game.categoria === 'solitario'));
createCards('family-container', games.filter(game => game.categoria === 'familiar'));
createCards('others-container', games.filter(game => game.categoria === 'otros'));