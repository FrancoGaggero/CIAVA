# Guía de Personalización - CIAVA Landing

Este documento te guiará paso a paso para personalizar la landing page según tus necesidades.

## 📋 Checklist de Personalización

### 1. Información General

**Layout.astro** - `src/layouts/Layout.astro`
- [ ] Cambiar título del sitio (línea 9-10)
- [ ] Actualizar descripción meta (línea 11)
- [ ] Ajustar idioma si es necesario (línea 18)

### 2. Hero Section

**Hero.astro** - `src/components/Hero.astro`
- [ ] Reemplazar imagen de fondo (línea 11)
- [ ] Actualizar título si es necesario (línea 18)
- [ ] Modificar subtítulo (línea 21)
- [ ] Ajustar texto del botón CTA (línea 28)

### 3. About Section

**About.astro** - `src/components/About.astro`
- [ ] Cambiar foto de la productora (línea 23)
- [ ] Actualizar nombre de la productora (línea 28)
- [ ] Modificar biografía de la productora (líneas 34-37)
- [ ] Cambiar foto de la fotógrafa (línea 44)
- [ ] Actualizar nombre de la fotógrafa (línea 49)
- [ ] Modificar biografía de la fotógrafa (líneas 55-58)

### 4. Portfolio Section

**Portfolio.astro** - `src/components/Portfolio.astro`
- [ ] Reemplazar imágenes del portfolio (líneas 7-15)
- [ ] Agregar o quitar imágenes según necesites
- [ ] Actualizar textos alternativos de las imágenes

### 5. Services Section

**Services.astro** - `src/components/Services.astro`
- [ ] Modificar títulos de servicios (líneas 11, 17, 23, 29)
- [ ] Actualizar descripciones de servicios (líneas 12, 18, 24, 30)
- [ ] Ajustar iconos SVG si es necesario

### 6. Studio Nordelta Section

**StudioNordelta.astro** - `src/components/StudioNordelta.astro`
- [ ] Actualizar ubicación si es diferente (línea 26)
- [ ] Modificar descripción del estudio (líneas 29-32)
- [ ] Cambiar placeholder del email (línea 39)
- [ ] Ajustar features del estudio (líneas 53-82)

### 7. Contact Section

**Contact.astro** - `src/components/Contact.astro`
- [ ] Actualizar email de contacto (líneas 28, 31)
- [ ] Cambiar número de WhatsApp (líneas 38, 41)
- [ ] Actualizar handle de Instagram (líneas 48, 51)
- [ ] Modificar opciones del formulario (líneas 83-89)

### 8. Footer

**Footer.astro** - `src/components/Footer.astro`
- [ ] Actualizar descripción de la marca (líneas 16-18)
- [ ] Cambiar links de redes sociales (líneas 46, 64, 82)
- [ ] Modificar información de contacto
- [ ] Actualizar texto de copyright (línea 95)

## 🎨 Personalización de Estilos

### Colores

Edita `tailwind.config.mjs`:

```javascript
colors: {
  nude: '#E8D5C4',  // Cambia este valor
  gold: '#C9A978',  // Cambia este valor
},
```

### Tipografías

En `src/layouts/Layout.astro` (líneas 27-30), puedes cambiar las fuentes:

```html
<link 
  href="https://fonts.googleapis.com/css2?family=TU_FUENTE_AQUI" 
  rel="stylesheet" 
/>
```

Luego actualiza en `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Tu Fuente', 'system-ui', 'sans-serif'],
  display: ['Tu Fuente Display', 'serif'],
},
```

## 🎬 Animaciones

### Ajustar velocidad de animaciones

En `src/scripts/animations.js`, modifica los valores de `duration`:

```javascript
// Más rápido
duration: 800,

// Más lento
duration: 1500,
```

### Cambiar timing de stagger

```javascript
// Menos delay entre elementos
staggerReveal(elements, 100)

// Más delay entre elementos
staggerReveal(elements, 300)
```

### Deshabilitar animaciones

Simplemente comenta o elimina las líneas de los scripts en cada componente.

## 📸 Imágenes

### Recomendaciones de tamaño

- **Hero**: 1920x1080px mínimo
- **About (Perfiles)**: 800x800px (cuadradas)
- **Portfolio**: 800x1200px (proporción 3:4)

### Servicios de imágenes recomendados

1. **Unsplash** - Fotos gratuitas de alta calidad
2. **Pexels** - Otro banco de imágenes gratuito
3. **Tu propio servidor** - Coloca en `/public/images/`

### Uso de imágenes locales

1. Crea una carpeta: `public/images/`
2. Coloca tus imágenes ahí
3. Usa en los componentes:

```html
<img src="/images/tu-imagen.jpg" alt="Descripción" />
```

## 🔗 Links y Redes Sociales

### Instagram

Actualiza en múltiples lugares:
- `Contact.astro` líneas 48, 51
- `Footer.astro` línea 46

```html
href="https://instagram.com/tu_usuario"
```

### WhatsApp

Formato del link:

```html
href="https://wa.me/549CODIGOAREANUMERO"
```

Ejemplo: `https://wa.me/5491141234567`

### Email

Actualiza en:
- `Contact.astro` líneas 28, 31
- `Footer.astro` línea 82

## 🚀 Deploy

### Preparar para producción

1. Revisa todas las personalizaciones
2. Ejecuta el build:
   ```bash
   npm run build
   ```
3. Previsualiza:
   ```bash
   npm run preview
   ```

### Plataformas recomendadas

**Vercel** (Recomendado)
1. Crea cuenta en vercel.com
2. Conecta tu repositorio de GitHub
3. Deploy automático

**Netlify**
1. Arrastra carpeta `dist` a netlify.com
2. O conecta con GitHub

## 📝 Notas Importantes

- Mantén copias de seguridad antes de grandes cambios
- Prueba en múltiples dispositivos después de personalizar
- Las imágenes pesadas afectan la velocidad - optimízalas
- Usa herramientas como TinyPNG para comprimir imágenes
- Verifica links después de cada cambio

## 🆘 Solución de Problemas

### Las animaciones no funcionan
- Verifica que `animejs` esté instalado: `npm install`
- Revisa la consola del navegador para errores

### Las imágenes no se ven
- Verifica las rutas de las imágenes
- Asegúrate que estén en `/public/` o sean URLs válidas

### Errores de TypeScript
- Ejecuta: `npm run astro check`
- Revisa los errores y ajusta los tipos

### El sitio no compila
- Elimina `node_modules` y `.astro`
- Ejecuta: `npm install`
- Intenta nuevamente: `npm run dev`

## 📞 Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Anime.js Documentation](https://animejs.com/documentation/)
- [Google Fonts](https://fonts.google.com/)

---

¡Buena suerte con tu proyecto CIAVA! 🎉
