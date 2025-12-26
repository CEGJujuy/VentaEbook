# VentaEbook - Landing Page Profesional

Landing page moderna y responsive diseñada específicamente para vender ebooks digitales con alta conversión.

## Características

- **Hero Section** con título impactante y CTA principal
- **Sección "Qué vas a aprender"** con beneficios claros y orientados a resultados
- **Problema → Solución** que conecta con el dolor del usuario
- **Mockup visual del ebook** con diseño premium
- **Beneficios concretos** y resultados esperados
- **Sección de precios** con comparación y oferta especial
- **Botón flotante de WhatsApp** para consultas
- **Diseño totalmente responsive** (desktop, tablet, mobile)
- **Optimizado para conversión** con múltiples CTAs estratégicos

## Tecnologías

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Lucide React (iconos)

## Instalación

```bash
npm install
```

## Desarrollo

El servidor de desarrollo se inicia automáticamente.

## Personalización

### 1. Cambiar el contenido del ebook

Edita los archivos en `src/components/`:
- `Hero.tsx` - Título principal y subtítulo
- `WhatYouLearn.tsx` - Puntos de aprendizaje
- `ProblemSolution.tsx` - Problemas y soluciones
- `Benefits.tsx` - Beneficios concretos
- `PricingCTA.tsx` - Precio y oferta

### 2. Configurar WhatsApp

En `src/components/WhatsAppButton.tsx`, cambia el número de teléfono:

```typescript
const phoneNumber = '1234567890' // Reemplaza con tu número (código de país + número)
```

### 3. Integrar método de pago

Para integrar pagos reales, puedes usar:

- **Stripe**: Servicio de pagos internacional
- **Hotmart**: Popular en América Latina para productos digitales
- **Mercado Pago**: Ideal para países de habla hispana

Edita `src/components/PricingCTA.tsx` en la función `handleBuyClick()` para integrar tu método de pago preferido.

#### Para Stripe:

1. Crea una cuenta en [Stripe](https://dashboard.stripe.com/register)
2. Obtén tu clave de API
3. Más información: https://bolt.new/setup/stripe

### 4. Cambiar colores

Los colores se configuran en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Personaliza estos valores
  }
}
```

### 5. Cambiar imágenes

Las imágenes de stock están enlazadas desde Pexels. Para cambiar:
- Hero background: `src/components/Hero.tsx` (línea del background)
- Mockup del ebook: `src/components/EbookPreview.tsx`

## Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.tsx              # Sección principal
│   ├── WhatYouLearn.tsx      # Contenido del ebook
│   ├── ProblemSolution.tsx   # Problema y solución
│   ├── EbookPreview.tsx      # Mockup del ebook
│   ├── Benefits.tsx          # Beneficios y garantía
│   ├── PricingCTA.tsx        # Precios y compra
│   ├── WhatsAppButton.tsx    # Botón flotante
│   └── Footer.tsx            # Pie de página
├── App.tsx                   # Componente principal
├── main.tsx                  # Punto de entrada
└── index.css                 # Estilos globales
```

## SEO

Para mejorar el SEO:

1. Edita `index.html`:
   - Cambia el `<title>`
   - Actualiza la meta descripción
   - Añade meta tags de Open Graph

2. Considera añadir:
   - Google Analytics
   - Meta Pixel de Facebook
   - Schema.org markup

## Optimización de Conversión

Esta landing está optimizada para conversión con:

- Múltiples CTAs estratégicamente ubicados
- Prueba social (5,000+ copias vendidas)
- Garantía de 30 días
- Escasez (oferta por tiempo limitado)
- Comparación clara (con vs sin ebook)
- Diseño limpio enfocado en lectura rápida

## Licencia

Proyecto desarrollado para VentaEbook