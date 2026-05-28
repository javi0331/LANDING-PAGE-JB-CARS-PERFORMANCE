import { Bebas_Neue, Syne, DM_Sans } from 'next/font/google';
import '../styles/tokens.css';
import './globals.css';
import SmoothScroll from '@/components/providers/SmoothScroll';



/* ── Fuentes optimizadas con next/font ── */
const bebasNeue = Bebas_Neue({
  weight:   ['400'],
  subsets:  ['latin'],
  variable: '--font-display',
  display:  'swap',
});

const syne = Syne({
  weight:   ['400', '500', '600', '700', '800'],
  subsets:  ['latin'],
  variable: '--font-heading',
  display:  'swap',
});

const dmSans = DM_Sans({
  weight:   ['300', '400', '500', '600'],
  style:    ['normal', 'italic'],
  subsets:  ['latin'],
  variable: '--font-body',
  display:  'swap',
});

/* ── Metadata SEO ── */
export const metadata = {
  title: {
    default: 'JB Cars Performance | Especialistas en Alto Rendimiento',
    template: '%s | JB Cars Performance',
  },
  description:
    'Especialistas en preparación, modificación y mantenimiento de vehículos de alto rendimiento en Colombia. Potencia, suspensión, estética y más.',
  keywords: [
    'JB Cars Performance',
    'tuning Colombia',
    'preparación vehicular',
    'alto rendimiento',
    'modificación autos',
    'performance cars Bogotá',
  ],
  authors: [{ name: 'JB Cars Performance' }],
  creator: 'Javier Rodríguez — Freelance Dev',
  openGraph: {
    type:        'website',
    locale:      'es_CO',
    url:         'https://jbcarsperformance.com',     // Actualizar al deploy
    siteName:    'JB Cars Performance',
    title:       'JB Cars Performance | Alto Rendimiento',
    description: 'Rendimiento sin compromisos. Especialistas en preparación vehicular.',
    images: [
      {
        url:    '/og-image.jpg',    // Agregar imagen 1200x630 en /public
        width:  1200,
        height: 630,
        alt:    'JB Cars Performance',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'JB Cars Performance',
    description: 'Rendimiento sin compromisos.',
    images:      ['/og-image.jpg'],
  },
  robots: {
    index:  true,
    follow: true,
  },
  icons: {
    icon:   '/favicon.ico',
    apple:  '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <body>
  <SmoothScroll>
    {children}
  </SmoothScroll>
</body>
    </html>
  );
}
