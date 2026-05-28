# ✦ CORPORATE LANDING PAGE
### Presencia digital de alto impacto — Next.js · JavaScript · Tailwind CSS

<br/>

<div align="center">

![Status](https://img.shields.io/badge/Estado-En%20Desarrollo-black?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=nextdotjs)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-black?style=for-the-badge&logo=javascript)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-black?style=for-the-badge&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)

</div>

---

## ◈ Índice

- [Visión del Proyecto](#-visión-del-proyecto)
- [Vista Previa](#-vista-previa)
- [Stack Tecnológico](#-stack-tecnológico)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Características Principales](#-características-principales)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Variables de Entorno](#-variables-de-entorno)
- [Lógica WhatsApp Rotador](#-lógica-whatsapp-rotador)
- [Sistema de Diseño](#-sistema-de-diseño)
- [Responsive Design](#-responsive-design)
- [Roadmap](#-roadmap)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

---

## ◈ Visión del Proyecto

> *Una presencia digital no es un lujo — es el primer apretón de manos con tu cliente.*

Este proyecto nace de la necesidad de una empresa emergente con fuerte presencia en redes sociales de tener un punto de contacto central, sofisticado y funcional en la web. La landing page está diseñada bajo los principios de:

- **Identidad visual consistente** con la marca existente en redes
- **Conversión directa** a través de WhatsApp como canal principal
- **Experiencia de usuario premium** sin sacrificar velocidad de carga
- **Diseño atemporal** en blanco, negro y escala de grises

No es solo una página web. Es la cara digital de una marca que sabe quién es.

---

## ◈ Vista Previa

```
┌─────────────────────────────────────────┐
│  ▓▓▓▓▓▓▓  NAVBAR  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
├─────────────────────────────────────────┤
│                                         │
│         HERO — FULL SCREEN              │
│      Título impactante · CTA            │
│                                         │
├─────────────────────────────────────────┤
│  ABOUT       │     SERVICES             │
│  Quiénes     │     Lo que hacemos       │
│  somos       │     mejor                │
├─────────────────────────────────────────┤
│                                         │
│         MAPA DE UBICACIÓN               │
│         Google Maps / Leaflet           │
│                                         │
├─────────────────────────────────────────┤
│  FOOTER — Info · Redes · Legal          │
└─────────────────────────────────────────┘
                              ◉ WhatsApp  ← Flotante
```

---

## ◈ Stack Tecnológico

### 🖤 Core

| Tecnología | Versión | Rol |
|---|---|---|
| **Next.js** | 14+ | Framework principal (App Router) |
| **JavaScript** | ES6+ | Lenguaje base |
| **CSS Modules** | — | Estilos encapsulados por componente |
| **Tailwind CSS** | 3+ | Utilidades responsive y mobile-first |

### 🖤 UI & Experiencia

| Librería | Rol |
|---|---|
| **Framer Motion** | Animaciones fluidas y transiciones sofisticadas |
| **Lucide React** | Iconografía limpia y minimalista |
| **next/font** | Tipografías optimizadas (Inter + Playfair Display) |
| **next/image** | Optimización automática de imágenes |

### 🖤 Funcionalidades

| Herramienta | Rol |
|---|---|
| **Leaflet.js + React-Leaflet** | Mapa interactivo de ubicación (sin costo) |
| **WhatsApp wa.me API** | Botón de contacto directo |
| **Lógica JS pura** | Rotación inteligente de líneas de WhatsApp |
| **localStorage** | Persistencia de turno de línea activa |

### 🖤 DevOps & Deploy

| Herramienta | Rol |
|---|---|
| **Vercel** | Deploy automático desde GitHub |
| **GitHub** | Control de versiones (repo privado) |
| **ESLint + Prettier** | Calidad y formato de código |

---

## ◈ Arquitectura del Proyecto

```
landing-empresa/
│
├── 📁 app/
│   ├── layout.js              # Metadata global, fuentes, estructura base
│   ├── page.js                # Orquestador de secciones
│   └── globals.css            # Variables CSS globales
│
├── 📁 components/
│   ├── 📁 Navbar/
│   │   ├── Navbar.jsx         # Navegación con scroll suave
│   │   └── Navbar.module.css
│   │
│   ├── 📁 Hero/
│   │   ├── Hero.jsx           # Primera impresión — full screen
│   │   └── Hero.module.css
│   │
│   ├── 📁 About/
│   │   ├── About.jsx          # Historia y propósito de la empresa
│   │   └── About.module.css
│   │
│   ├── 📁 Services/
│   │   ├── Services.jsx       # Cards de servicios/productos
│   │   └── Services.module.css
│   │
│   ├── 📁 Location/
│   │   ├── Location.jsx       # Mapa + dirección + datos de contacto
│   │   └── Location.module.css
│   │
│   ├── 📁 WhatsAppButton/
│   │   ├── WhatsAppButton.jsx # Botón flotante con lógica de rotación
│   │   └── WhatsAppButton.module.css
│   │
│   └── 📁 Footer/
│       ├── Footer.jsx         # Links, redes sociales, legal
│       └── Footer.module.css
│
├── 📁 lib/
│   ├── whatsappRotator.js     # Lógica de rotación de líneas
│   └── constants.js           # Datos configurables (textos, links)
│
├── 📁 public/
│   ├── logo.svg
│   ├── logo-white.svg
│   └── 📁 images/
│
├── 📁 styles/
│   └── tokens.css             # Design tokens (colores, tipografías, espaciados)
│
├── .env.local                 # Variables de entorno (no subir a git)
├── .env.example               # Plantilla de variables de entorno
├── next.config.js
├── tailwind.config.js
└── README.md
```

---

## ◈ Características Principales

### ✦ Diseño Impoluto
Paleta estrictamente monocromática (**#000000 · #FFFFFF · escala de grises**) con tipografía editorial de alto contraste. Cada pixel tiene intención.

### ✦ Mobile-First
Diseñado primero para el dispositivo donde tus clientes de redes te encuentran — el teléfono. Luego escala hacia desktop sin perder elegancia.

### ✦ WhatsApp Directo
Botón flotante visible en todo momento. Un click. Cero fricción. El canal de ventas más usado en Latinoamérica, integrado de forma nativa.

### ✦ Rotación de Líneas
Sistema inteligente que distribuye los contactos entrantes entre múltiples asesores o líneas de WhatsApp de forma automática. Sin configuración manual del usuario.

### ✦ Mapa Interactivo
Ubicación visual de la empresa con Leaflet.js — funciona sin Google Maps API key, sin costos ocultos.

### ✦ Performance Optimizado
- `next/image` para imágenes con lazy loading automático
- Fuentes subseteadas con `next/font`
- CSS crítico inline
- Puntuación objetivo en Lighthouse: **95+**

---

## ◈ Instalación y Configuración

### Prerequisitos

```bash
node >= 18.0.0
npm >= 9.0.0
git
```

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/landing-empresa.git
cd landing-empresa
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env.local
# Editar .env.local con tus datos reales
```

### 4. Correr en desarrollo

```bash
npm run dev
# Abre http://localhost:3000
```

### 5. Build de producción

```bash
npm run build
npm run start
```

---

## ◈ Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# ─────────────────────────────────────────
# WHATSAPP — Líneas de contacto
# Formato: código de país + número (sin +, sin espacios)
# ─────────────────────────────────────────
NEXT_PUBLIC_WA_LINE_1=573001234567
NEXT_PUBLIC_WA_LINE_2=573007654321
NEXT_PUBLIC_WA_LINE_3=573009876543

# ─────────────────────────────────────────
# MENSAJE AUTOMÁTICO DE BIENVENIDA
# Se pre-carga en el chat de WhatsApp al abrir
# ─────────────────────────────────────────
NEXT_PUBLIC_WA_DEFAULT_MESSAGE=Hola! Quiero obtener más información sobre sus servicios.

# ─────────────────────────────────────────
# EMPRESA — Información general
# ─────────────────────────────────────────
NEXT_PUBLIC_COMPANY_NAME=Nombre de la Empresa
NEXT_PUBLIC_COMPANY_ADDRESS=Calle 123 #45-67, Bogotá, Colombia
NEXT_PUBLIC_MAP_LAT=4.7110
NEXT_PUBLIC_MAP_LNG=-74.0721
```

> ⚠️ **Nunca subas `.env.local` a GitHub.** Ya está en el `.gitignore`. Usa `.env.example` como guía pública.

---

## ◈ Lógica WhatsApp Rotador

El sistema distribuye los contactos entrantes de forma equitativa entre todas las líneas disponibles.

```javascript
// lib/whatsappRotator.js

const getLines = () => [
  { number: process.env.NEXT_PUBLIC_WA_LINE_1, label: "Línea Principal" },
  { number: process.env.NEXT_PUBLIC_WA_LINE_2, label: "Línea Ventas" },
  { number: process.env.NEXT_PUBLIC_WA_LINE_3, label: "Línea Soporte" },
].filter(line => line.number); // Solo líneas configuradas

/**
 * Retorna la siguiente línea disponible (round-robin)
 * Persiste el turno actual en localStorage
 */
export function getNextLine() {
  const lines = getLines();
  if (!lines.length) return null;

  const currentIndex = parseInt(
    localStorage.getItem("wa_rotation_index") || "0"
  );

  const line = lines[currentIndex % lines.length];
  localStorage.setItem("wa_rotation_index", (currentIndex + 1) % lines.length);

  return line;
}

/**
 * Construye la URL de WhatsApp con mensaje pre-cargado
 * @param {Object} line - Objeto con número de la línea
 * @param {string} customMessage - Mensaje personalizado opcional
 */
export function buildWhatsAppURL(line, customMessage = null) {
  const message = customMessage || process.env.NEXT_PUBLIC_WA_DEFAULT_MESSAGE || "";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${line.number}?text=${encoded}`;
}

/**
 * Función principal — obtiene línea y construye URL
 */
export function getWhatsAppURL(customMessage = null) {
  const line = getNextLine();
  if (!line) return "https://wa.me/";
  return buildWhatsAppURL(line, customMessage);
}
```

### Estrategias de Rotación Disponibles

| Estrategia | Descripción | Implementación |
|---|---|---|
| **Round Robin** | Turno equitativo entre todas las líneas | `localStorage` index |
| **Aleatoria** | Línea al azar en cada click | `Math.random()` |
| **Por Horario** | Línea según hora del día | `new Date().getHours()` |

---

## ◈ Sistema de Diseño

### Paleta de Colores

```css
/* styles/tokens.css */

:root {
  /* ── Negros ─────────────────── */
  --color-black:        #000000;
  --color-gray-900:     #111111;
  --color-gray-800:     #1a1a1a;
  --color-gray-700:     #2d2d2d;

  /* ── Escala de Grises ──────── */
  --color-gray-600:     #404040;
  --color-gray-500:     #737373;
  --color-gray-400:     #a3a3a3;
  --color-gray-300:     #d4d4d4;
  --color-gray-200:     #e5e5e5;
  --color-gray-100:     #f5f5f5;

  /* ── Blancos ────────────────── */
  --color-white:        #ffffff;
  --color-off-white:    #fafafa;

  /* ── Tipografía ─────────────── */
  --font-display:       'Playfair Display', serif;  /* Títulos elegantes */
  --font-body:          'Inter', sans-serif;         /* Cuerpo legible */

  /* ── Espaciado ──────────────── */
  --space-xs:   0.25rem;
  --space-sm:   0.5rem;
  --space-md:   1rem;
  --space-lg:   2rem;
  --space-xl:   4rem;
  --space-2xl:  8rem;

  /* ── Bordes ─────────────────── */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  16px;

  /* ── Transiciones ───────────── */
  --transition-fast:    150ms ease;
  --transition-base:    300ms ease;
  --transition-slow:    600ms ease;
}
```

### Tipografías

| Familia | Uso | Peso |
|---|---|---|
| **Playfair Display** | Títulos H1, H2, Hero | 400, 700 |
| **Inter** | Cuerpo, párrafos, UI | 300, 400, 500 |

---

## ◈ Responsive Design

El diseño sigue una estrategia **mobile-first** con los siguientes breakpoints:

```
📱 Mobile     → 375px   (base — diseño principal)
📱 Mobile L   → 425px
💊 Tablet     → 768px
💻 Laptop     → 1024px
🖥️  Desktop   → 1280px
🖥️  Desktop L → 1440px
```

### Pruebas de Dispositivos Objetivo

- [ ] iPhone SE (375px)
- [ ] iPhone 14 Pro (393px)
- [ ] Samsung Galaxy S21 (360px)
- [ ] iPad Mini (768px)
- [ ] MacBook 13" (1280px)
- [ ] Full HD 1920px

---

## ◈ Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo en localhost:3000
npm run build      # Build optimizado de producción
npm run start      # Servidor de producción local
npm run lint       # Linting con ESLint
npm run format     # Formateo con Prettier
```

---

## ◈ Roadmap

### Versión 1.0 — MVP *(En progreso)*
- [x] Estructura del proyecto y sistema de diseño
- [ ] Componente Navbar con scroll activo
- [ ] Sección Hero full-screen
- [ ] Sección About
- [ ] Sección Services
- [ ] Sección Location con Leaflet
- [ ] Botón flotante WhatsApp
- [ ] Footer completo
- [ ] Responsive mobile ✓ desktop

### Versión 1.1 — Pulido
- [ ] Animaciones con Framer Motion
- [ ] SEO básico con next-seo
- [ ] Open Graph Image para redes sociales
- [ ] Optimización Lighthouse > 95
- [ ] Deploy en Vercel

### Versión 2.0 — Escalabilidad *(Futuro)*
- [ ] Rotación de WhatsApp por horario de atención
- [ ] Analytics de clics en WhatsApp
- [ ] Formulario de contacto ligero
- [ ] Modo oscuro / claro automático
- [ ] Múltiples idiomas (ES/EN)

---

## ◈ Performance Objetivo

| Métrica | Objetivo | Herramienta |
|---|---|---|
| Performance | ≥ 95 | Lighthouse |
| Accessibility | ≥ 90 | Lighthouse |
| Best Practices | ≥ 95 | Lighthouse |
| SEO | ≥ 95 | Lighthouse |
| First Contentful Paint | < 1.5s | Web Vitals |
| Largest Contentful Paint | < 2.5s | Web Vitals |

---

## ◈ Estructura de Ramas

```
main              ← Producción (deploy automático en Vercel)
│
├── develop       ← Integración de features
│   ├── feat/navbar
│   ├── feat/hero
│   ├── feat/whatsapp-rotator
│   └── feat/location-map
│
└── hotfix/*      ← Correcciones urgentes en producción
```

---

## ◈ Contribución

Este proyecto es de desarrollo freelance privado. Si en el futuro se abre a contribuciones:

1. Haz fork del repositorio
2. Crea tu rama: `git checkout -b feat/nueva-funcionalidad`
3. Commitea tus cambios: `git commit -m 'feat: agrega nueva funcionalidad'`
4. Push a la rama: `git push origin feat/nueva-funcionalidad`
5. Abre un Pull Request hacia `develop`

### Convención de Commits

```
feat:     Nueva funcionalidad
fix:      Corrección de bug
style:    Cambios de estilo/CSS
refactor: Refactorización de código
docs:     Documentación
chore:    Tareas de mantenimiento
```

---

## ◈ Desarrollador

<div align="center">

**Javier Rodríguez**
Estudiante de Ingeniería de Sistemas · Desarrollador Freelance

[![GitHub](https://img.shields.io/badge/GitHub-black?style=flat-square&logo=github)](https://github.com/tu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-black?style=flat-square&logo=linkedin)](https://linkedin.com/in/tu-perfil)

</div>

---

## ◈ Licencia

Este proyecto es de uso privado y exclusivo del cliente. Todos los derechos reservados.

```
Copyright © 2025 — [JB CARS PERFORMANCE]
Desarrollado por Javier Rodríguez · Freelance
```

---

<div align="center">

*Diseñado con intención. Construido con precisión.*

**◈**

</div>