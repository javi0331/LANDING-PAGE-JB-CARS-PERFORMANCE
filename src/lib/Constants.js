/* ============================================================
   JB CARS PERFORMANCE — Constantes configurables
   Edita aquí textos, links y datos de la empresa
   ============================================================ */

export const BRAND = {
  name: 'JB Cars',
  fullName: 'JB Cars Performance',
  tagline: 'Rendimiento sin compromisos.',
  description:
    'Especialistas en preparación, modificación y mantenimiento de vehículos de alto rendimiento. Cada detalle cuenta.',
  year: 2025,
};

/* ── WhatsApp Lines ──────────────────────────────────────── */
// Agrega o quita líneas según necesites
export const WHATSAPP_LINES = [
  {
    id: 'linea-1',
    number: '573001234567',           // Formato: código país + número, sin +
    label: 'Asesor principal',
    activeHours: { start: 8, end: 18 }, // Horario de atención (24h)
  },
  {
    id: 'linea-2',
    number: '573007654321',
    label: 'Asesor ventas',
    activeHours: { start: 8, end: 18 },
  },
  // { id: 'linea-3', number: '57300...', label: 'Soporte técnico', ... },
];

export const WHATSAPP_DEFAULT_MESSAGE = encodeURIComponent(
  '¡Hola! Vi su página y me gustaría obtener más información sobre sus servicios.'
);

/* ── Navegación ─────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: 'Nosotros',   href: '#about'    },
  { label: 'Servicios',  href: '#services' },
  { label: 'Ubicación',  href: '#location' },
  { label: 'Contacto',   href: '#contact'  },
];

/* ── Servicios ──────────────────────────────────────────── */
export const SERVICES = [
  {
    id: 'performance',
    title: 'Performance',
    subtitle: 'Potencia al máximo',
    description:
      'Reprogramación de ECU, turbos, intercoolers y sistemas de escape de alto flujo. Extraemos cada caballo de fuerza.',
    icon: 'Gauge',
  },
  {
    id: 'suspension',
    title: 'Suspensión',
    subtitle: 'Control absoluto',
    description:
      'Kits de bajada, coilovers, barras estabilizadoras y geometría de suspensión ajustada a tu estilo de manejo.',
    icon: 'Settings',
  },
  {
    id: 'estetica',
    title: 'Estética',
    subtitle: 'Presencia que impacta',
    description:
      'Body kits, aerodinámica funcional, llantas de alta gama y acabados que convierten tu vehículo en una declaración.',
    icon: 'Sparkles',
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento',
    subtitle: 'Precisión en cada servicio',
    description:
      'Diagnóstico computarizado, cambio de aceites de competencia, frenos de alto rendimiento y más.',
    icon: 'Wrench',
  },
];

/* ── Ubicación ──────────────────────────────────────────── */
export const LOCATION = {
  address:   'Dirección, Ciudad, Colombia',     // Reemplazar
  city:      'Bogotá',
  country:   'Colombia',
  lat:        4.711,                            // Coordenadas reales
  lng:       -74.0721,
  mapsUrl:   'https://maps.google.com',         // Link directo a Google Maps
  schedule: [
    { days: 'Lunes — Viernes', hours: '8:00 am — 6:00 pm' },
    { days: 'Sábados',         hours: '9:00 am — 3:00 pm' },
    { days: 'Domingos',        hours: 'Cerrado'            },
  ],
};

/* ── Redes Sociales ─────────────────────────────────────── */
export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/jbcarsperformance', icon: 'Instagram' },
  { label: 'TikTok',    href: 'https://tiktok.com/@jbcarsperformance',   icon: 'Music'     },
  { label: 'Facebook',  href: 'https://facebook.com/jbcarsperformance',  icon: 'Facebook'  },
  // { label: 'YouTube', href: 'https://youtube.com/...', icon: 'Youtube' },
];