# CIAVA Studio - Landing Page

Landing page profesional para CIAVA Studio, estudio creativo especializado en fotografía y video de moda para marcas.

## 🎯 Características

- **Diseño Minimal y Editorial**: Estética limpia y de moda con fondo blanco y tipografía negra
- **Animaciones Fluidas**: Implementadas con Anime.js para una experiencia dinámica
- **Responsive**: Totalmente adaptable a todos los dispositivos
- **Performance Optimizada**: Construida con Astro para máxima velocidad
- **Código Modular**: Componentes reutilizables y bien organizados

## 🛠️ Tecnologías

- **[Astro](https://astro.build)** - Framework web moderno
- **[TailwindCSS](https://tailwindcss.com)** - Framework de CSS utility-first
- **[Anime.js](https://animejs.com)** - Librería de animaciones JavaScript
- **TypeScript** - Tipado estático

## 📁 Estructura del Proyecto

```
ciava-landing/
├── src/
│   ├── components/
│   │   ├── Hero.astro           # Imagen apaisada con título
│   │   ├── Intro.astro          # Descripción del estudio
│   │   ├── About.astro          # Quiénes somos (Florencia y Valentina)
│   │   ├── Services.astro       # Servicios ofrecidos
│   │   ├── StudioNordelta.astro # Coming Soon - Marzo 2026
│   │   ├── Contact.astro        # Iconos de contacto minimalistas
│   │   └── Footer.astro         # Footer simple
│   ├── layouts/
│   │   └── Layout.astro         # Layout principal con SEO
│   ├── pages/
│   │   └── index.astro          # Página principal
│   ├── scripts/
│   │   └── animations.js        # Librería de animaciones
│   └── config.ts                # Configuración centralizada
├── public/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 Instalación

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**:
   ```
   http://localhost:4321
   ```

## 📦 Comandos Disponibles

| Comando                | Acción                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Instala las dependencias                    |
| `npm run dev`          | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`        | Construye el sitio para producción en `./dist/` |
| `npm run preview`      | Vista previa del build local antes de desplegar |

## 🎨 Estética

- **Fondo**: Blanco predominante
- **Tipografía**: Negra, sans-serif elegante (Inter)
- **Estilo**: Minimal · Editorial · Moda
- **Sin colores de acento**: Diseño puro blanco y negro

## 🎭 Secciones

### 1. Hero
Imagen apaisada fullscreen con título "CIAVA STUDIO" y subtítulo "FOTOGRAFÍA Y VIDEO DE MODA PARA MARCAS".

### 2. Intro
Descripción breve del estudio: "Somos un estudio creativo especializado en producción de contenido visual para marcas."

### 3. Quiénes Somos
- Foto del equipo
- Texto introductorio sobre la fusión de miradas
- Perfiles individuales:
  - **Florencia Zoccola**: Fotógrafa con más de 10 años de experiencia
  - **Valentina Bozzone**: Productora de moda

### 4. Servicios
Lista limpia de 4 servicios:
- Producciones de fotos y video para marcas
- Asesoría de imagen y estilismo
- Polas para modelos
- Fotografía de producto

### 5. Coming Soon
"MARZO 2026 - Próximamente inauguramos nuestro estudio en Nordelta."

### 6. Contacto
Iconos minimalistas en negro:
- Instagram
- TikTok
- Email
- WhatsApp

### 7. Footer
Simple con copyright del año actual.

## 📝 Personalización

### Cambiar información de contacto
Edita `src/config.ts`:
```typescript
contact: {
  email: 'tu-email@ciava.com.ar',
  instagram: '@tu_instagram',
  tiktok: '@tu_tiktok',
  whatsapp: '54911TUNUMERO',
}
```

### Reemplazar imágenes
1. Coloca tus imágenes en `public/images/`
2. Actualiza las rutas en cada componente

### Modificar textos
Todos los textos están centralizados en `src/config.ts` para facilitar la edición.

## 🎬 Animaciones

El archivo `animations.js` incluye funciones reutilizables:
- `fadeInUp(element, delay)` - Fade in con slide desde abajo
- `staggerReveal(elements, stagger)` - Reveal escalonado
- Las animaciones se activan automáticamente al hacer scroll

## 🌐 Deploy

Este proyecto está listo para ser desplegado en:
- [Vercel](https://vercel.com) (Recomendado)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

```bash
npm run build
```

## 📄 Equipo

**Florencia Zoccola** - Fotógrafa  
Más de 10 años de experiencia, formada en Motivarte (Buenos Aires).

**Valentina Bozzone** - Productora  
Recibida en la Universidad de Palermo.

---

**CIAVA STUDIO © 2026**

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
