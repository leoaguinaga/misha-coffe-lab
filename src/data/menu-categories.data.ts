export const menuCategories = [
  {
    id: 'clasico',
    name: 'Café Clásico',
    items: [
      {
        name: 'Cappuccino Tradicional',
        price: '$4.50',
        description:
          'Equilibrio perfecto entre espresso intenso y leche vaporizada con espuma aterciopelada.',
        image: '/images/menu/cappuccino-tradicional.png',
        badge: 'Especialidad'
      },
      {
        name: 'Flat White',
        price: '$4.75',
        description:
          'Doble shot de ristretto con una fina capa de leche micro-espumada y textura sedosa.',
        image: '/images/menu/cappuccino-tradicional.png',
        badge: ''
      },
      {
        name: 'Americano de Origen',
        price: '$3.90',
        description:
          'Espresso diluido en agua caliente, resaltando la pureza de nuestros granos de altura.',
        image: '/images/menu/cappuccino-tradicional.png',
        badge: ''
      },
      {
        name: 'Cortado Intenso',
        price: '$4.10',
        description: 'Proporción equilibrada de espresso y leche vaporizada. Fuerza y dulzor.',
        image: '/images/menu/cappuccino-tradicional.png',
        badge: 'Especialidad'
      }
    ]
  },
  {
    id: 'metodos',
    name: 'Métodos Especiales',
    items: [
      {
        name: 'Método V60',
        price: '$6.50',
        description:
          'Filtrado manual que resalta la acidez cítrica y la claridad de sabores naturales.',
        image: '/images/menu/metodo-v60.png',
        badge: 'Recomendado'
      },
      {
        name: 'Chemex (2 Personas)',
        price: '$11.00',
        description:
          'Extracción limpia y brillante gracias a su filtro de triple densidad. Para compartir.',
        image: '/images/menu/metodo-v60.png',
        badge: ''
      }
    ]
  },
  {
    id: 'frios',
    name: 'Bebidas Frías',
    items: [
      {
        name: 'Iced Latte',
        price: '$4.80',
        description: 'Espresso con leche fría y hielo. Suave y refrescante.',
        image: '/images/menu/iced-latte.png',
        badge: ''
      },
      {
        name: 'Cold Brew de Noche',
        price: '$5.50',
        description:
          'Café extraído en frío por 18 horas. Cuerpo profundo y baja acidez.',
        image: '/images/menu/cold-brew.png',
        badge: 'Recomendado'
      },
      {
        name: 'Affogato al Vainilla',
        price: '$6.00',
        description: 'Helado de vainilla bañado con un shot de espresso caliente.',
        image: '/images/menu/cappuccino-tradicional.png',
        badge: ''
      },
      {
        name: 'Frappé de Café',
        price: '$5.20',
        description: 'Bebida fría batida con hielo y crema, textura cremosa.',
        image: '/images/menu/iced-latte.png',
        badge: 'Favorito'
      },
      {
        name: 'Iced Americano',
        price: '$3.95',
        description: 'Americano servido con hielo. Ligero y refrescante.',
        image: '/images/menu/cold-brew.png',
        badge: ''
      }
    ]
  },
  {
    id: 'especiales',
    name: 'Especialidades de la Casa',
    items: [
      {
        name: 'Mocha de Chocolate Oscuro',
        price: '$5.25',
        description: 'Chocolate amargo con espresso y leche vaporizada.',
        image: '/images/menu/mocha-chocolate-oscuro.png',
        badge: 'Recomendado'
      },
      {
        name: 'Caramel Macchiato',
        price: '$5.00',
        description: 'Vainilla, leche vaporizada y un toque de caramelo.',
        image: '/images/menu/cappuccino-tradicional.png',
        badge: ''
      },
      {
        name: 'Irish Coffee (Sin Alcohol)',
        price: '$5.50',
        description: 'Sabor a whisky en versión sin alcohol, con crema batida.',
        image: '/images/menu/mocha-chocolate-oscuro.png',
        badge: 'Temporada'
      },
      {
        name: 'Doppio Intenso',
        price: '$3.80',
        description: 'Doble shot de espresso para los amantes de la intensidad pura.',
        image: '/images/menu/cappuccino-tradicional.png',
        badge: ''
      },
      {
        name: 'Latte con Miel y Canela',
        price: '$4.90',
        description: 'Endulzado con miel natural y espolvoreado con canela.',
        image: '/images/menu/cappuccino-tradicional.png',
        badge: 'Especialidad'
      },
      {
        name: 'Signature House Blend',
        price: '$4.30',
        description: 'Mezcla exclusiva de la casa con notas a chocolate y frutos secos.',
        image: '/images/menu/cappuccino-tradicional.png',
        badge: 'Recomendado'
      }
    ]
  },
  {
    id: 'acompanamientos',
    name: 'Acompañamientos y Repostería',
    items: [
      {
        name: 'Croissant Mantequilla',
        price: '$2.50',
        description: 'Hojaldre ligero y mantecoso, perfecto con cualquier café.',
        image: '/images/menu/croissant-mantequilla.png',
        badge: ''
      },
      {
        name: 'Torta de Zanahoria (Porción)',
        price: '$3.80',
        description: 'Textura húmeda y glaseado de queso crema.',
        image: '/images/menu/torta-zanahoria.png',
        badge: 'Favorito'
      },
      {
        name: 'Brownie de Chocolate',
        price: '$2.90',
        description: 'Denso, fudgy y con trozos de chocolate.',
        image: '/images/menu/brownie-chocolate.png',
        badge: ''
      },
      {
        name: 'Pan de Queso Casero',
        price: '$1.90',
        description: 'Mini panecillos salados con queso derretido.',
        image: '/images/menu/croissant-mantequilla.png',
        badge: ''
      }
    ]
  }
] as const;
