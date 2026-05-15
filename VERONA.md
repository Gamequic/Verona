# Verona Academia Floral — Delivered

## Estado
- **Tipo:** Delivered (cliente activo)
- **Creado:** 2026-05-05 | **Movido a Delivered:** 2026-05-15
- **Investigación de mercado & SEO:** [MARKET_RESEARCH.md](./MARKET_RESEARCH.md) — actualizada 2026-05-15
- **Stack:** React 18 + Vite 5 + Framer Motion 11 + Tailwind CSS 3
- **Servidor:** `npm run dev` → http://localhost:5180

## Cliente
Academia de arte floral con modelo híbrido: cursos (Academia) + venta de arreglos de autor (Estudio).

## Contacto (Angel — representante del cliente)
- **Email:** magenta.jrz@gmail.com
- **WhatsApp/Tel:** +52 656 444 2305 (WA_NUM: `526564442305`)
- **Instagram:** https://www.instagram.com/verona_academia_floral/
- **Ciudad:** Ciudad Juárez, Chihuahua

## Imágenes
Actualmente usando Unsplash como placeholder. Para reemplazar con fotos reales:
1. Copiar archivos en `public/images/`
2. Actualizar rutas en `src/data/content.js` (objeto `IMAGES`)

| Slot | Descripción (del brief) | Archivo real |
|------|--------------------------|--------------|
| hero | Florista sonriendo con ramo (image_4) | `public/images/image_4.png` |
| academyFeature | Caja de regalo con lilas rosas/fucsias (image_2) | `public/images/image_2.png` |
| studioFeature | Jarrón blanco geométrico flores mixtas (image_5) | `public/images/image_5.png` |
| esencia | Ramo en jarrón marrón con pétalos sueltos (image_3) | `public/images/image_3.png` |

Logo real (image_1.png — cara de mujer con ramo + texto VERONA FLORAL STUDIO):
- Reemplazar el logo de texto en `Navbar.jsx` y `Footer.jsx` con `<img src="/images/image_1.png">`

## Paleta de colores
- Coral/Terracota (CTA): `#C96840`
- Fondo base: `#FAF9F6` (cream) / `#FFFFFF` (blanco)
- Texto principal: `#1A1917` (charcoal)
- Texto secundario: Tailwind `stone-500` (~`#78716c`)

## Tipografía
- Títulos: **Playfair Display** italic (Google Fonts)
- Cuerpo: **Inter** (Google Fonts)

## Estructura de componentes

```
src/
├── App.jsx
├── data/content.js   — textos, cursos, arreglos, catálogo, WA_NUM
└── components/
    ├── Navbar.jsx        — sticky, hamburger mobile, menú full-screen
    ├── Hero.jsx          — split layout (texto izq, imagen der), stats, dual CTA
    ├── Academia.jsx      — 3 tarjetas de cursos, stagger animation
    ├── Estudio.jsx       — 4 productos en grid, hover overlay WhatsApp
    ├── Catalogo.jsx      — galería real 35 fotos (16 arreglos + 19 ramos), tabs filtro
    ├── Esencia.jsx       — split imagen+texto, pillars grid
    ├── Newsletter.jsx    — suscripción email, fondo charcoal
    ├── Footer.jsx        — 3 columnas, social links
    └── WaFloat.jsx       — botón WhatsApp flotante
```

## Secciones
1. **Navbar** — logo, links (incluye Catálogo), CTA "Reserva tu Curso"
2. **Hero** — imagen florista, título serif, 2 CTAs, stats row
3. **Academia Floral** — 3 cursos (Inicial, Intermedio, Avanzado + Certificación)
4. **Estudio de Diseño** — 4 arreglos de autor, orden por WhatsApp
5. **Catálogo** — 35 fotos reales del cliente; tabs: Todos / Arreglos / Ramos
6. **Nuestra Esencia** — about us, 4 pilares de marca
7. **Únete a la Academia** — newsletter signup
8. **Footer** — logo, nav, contacto, social

## Catálogo de fotos reales (2026-05-15)
- **16 arreglos** en caja/jarrón → `public/images/arreglo_01.jpg` … `arreglo_16.jpg`
- **19 ramos** → `public/images/ramo_01.jpg` … `ramo_19.jpg`
- Fuente: correos .eml del cliente (extraídos y ubicados en `public/images/`)
- Sección `#catalogo` con tabs filtro: Todos / Arreglos / Ramos

## Qué necesita antes de entregar al cliente

| Campo | Estado | Acción |
|-------|--------|--------|
| Fotos catálogo | ✅ 35 fotos reales | Listo |
| Fotos hero/secciones | ⚠️ Parcial | Logo real en Navbar ✅; hero/academia aún placeholder |
| WhatsApp | ⚠️ Placeholder | Reemplazar WA_NUM en content.js |
| Precios | ⚠️ Estimados | Confirmar con cliente |
| Email contacto | ⚠️ Ficticio | Actualizar en Footer.jsx |
| Ciudad | ⚠️ CDMX placeholder | Confirmar ubicación |
