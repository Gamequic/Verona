const B = import.meta.env.BASE_URL

export const IMAGES = {
  hero: `${B}images/hero.png`,
  esencia: `${B}images/arreglo-novial.jpeg`,
}

export const COURSES = [
  {
    id: 1,
    title: 'Fundamentos del Arte Floral',
    subtitle: 'Taller Inicial',
    description:
      'Aprende los principios del diseño floral: selección, armonía de color y técnicas de corte. Ideal para principiantes apasionados por las flores.',
    duration: '8 hrs · 2 sesiones',
    price: '$1,200 MXN',
    image: `${B}images/curso-dulce.png`,
    tag: 'Más Popular',
  },
  {
    id: 2,
    title: 'Diseño de Arreglos de Autor',
    subtitle: 'Nivel Intermedio',
    description:
      'Composiciones únicas con flores de temporada, estructuras avanzadas y packaging boutique. Crea piezas que cuentan una historia.',
    duration: '12 hrs · 3 sesiones',
    price: '$1,800 MXN',
    image: `${B}images/arreglo-box.jpeg`,
    tag: null,
  },
  {
    id: 3,
    title: 'Arte Nupcial & Eventos',
    subtitle: 'Nivel Avanzado',
    description:
      'Especialización en bouquets de novia, centros de mesa y decoración floral para bodas y celebraciones de alta gama.',
    duration: '20 hrs · 5 sesiones',
    price: '$2,800 MXN',
    image: `${B}images/curso-calas.png`,
    tag: 'Certificación',
  },
]

export const ARRANGEMENTS = [
  {
    id: 1,
    name: 'Sinfonía Terracota',
    description: 'Jarrón geométrico blanco con rosas naranjas, crisantemos y flores mixtas de temporada.',
    price: '$680 MXN',
    image: `${B}images/arreglo-geometrico.jpeg`,
  },
  {
    id: 2,
    name: 'Bouquet Rojo Pasión',
    description: 'Ramo premium de rosas rojas, presentación elegante para regalos y ocasiones especiales.',
    price: '$520 MXN',
    image: `${B}images/arreglo-rosas.png`,
  },
  {
    id: 3,
    name: 'Bouquet Nupcial',
    description: 'Ramo de novia con claveles rosas, rosas blancas y eucalipto. Con listón y pétalos sueltos.',
    price: '$650 MXN',
    image: `${B}images/arreglo-novial.jpeg`,
  },
]

export const WA_NUM = '525512345678'
