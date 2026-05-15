# Verona Academia Floral — Demo

## Estado
- **Tipo:** Demo
- **Creado:** 2026-05-05
- **Stack:** React 18 + Vite 5 + Framer Motion 11 + Tailwind CSS 3
- **Servidor:** `npm run dev` → http://localhost:5180

## Cliente
Academia de arte floral con modelo híbrido: cursos (Academia) + venta de arreglos de autor (Estudio).

## Contacto
- **WhatsApp:** placeholder `525512345678` — reemplazar con número real del cliente

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
├── data/content.js   — textos, cursos, arreglos, WA_NUM
└── components/
    ├── Navbar.jsx        — sticky, hamburger mobile, menú full-screen
    ├── Hero.jsx          — split layout (texto izq, imagen der), stats, dual CTA
    ├── Academia.jsx      — 3 tarjetas de cursos, stagger animation
    ├── Estudio.jsx       — 4 productos en grid, hover overlay WhatsApp
    ├── Esencia.jsx       — split imagen+texto, pillars grid
    ├── Newsletter.jsx    — suscripción email, fondo charcoal
    ├── Footer.jsx        — 3 columnas, social links
    └── WaFloat.jsx       — botón WhatsApp flotante
```

## Secciones
1. **Navbar** — logo, links, CTA "Reserva tu Curso"
2. **Hero** — imagen florista, título serif, 2 CTAs, stats row
3. **Academia Floral** — 3 cursos (Inicial, Intermedio, Avanzado + Certificación)
4. **Estudio de Diseño** — 4 arreglos de autor, orden por WhatsApp
5. **Nuestra Esencia** — about us, 4 pilares de marca
6. **Únete a la Academia** — newsletter signup
7. **Footer** — logo, nav, contacto, social

## Qué necesita antes de entregar al cliente

| Campo | Estado | Acción |
|-------|--------|--------|
| Fotos reales | ⚠️ Unsplash placeholder | Usar image_1–image_5 del cliente |
| WhatsApp | ⚠️ Placeholder | Reemplazar WA_NUM en content.js |
| Precios | ⚠️ Estimados | Confirmar con cliente |
| Logo SVG real | ⚠️ Texto placeholder | Insertar imagen real en Navbar + Footer |
| Email contacto | ⚠️ Ficticio | Actualizar en Footer.jsx |
| Ciudad | ⚠️ CDMX placeholder | Confirmar ubicación |
