# 🚀 Inicio Rápido - CIAVA Landing

## ¡Tu landing está lista!

El servidor de desarrollo está corriendo en: **http://localhost:4321/**

## 📋 Primeros Pasos

### 1. Ver la landing en vivo
Abre tu navegador en: `http://localhost:4321/`

### 2. Personalización rápida

#### Cambiar información de contacto
Edita `src/config.ts` con tus datos:
```typescript
contact: {
  email: 'tu-email@ciava.com.ar',
  phone: '+54 9 11 TU-NUMERO',
  whatsapp: '54911TUNUMERO',
  instagram: '@tu_instagram',
}
```

#### Cambiar textos del equipo
En `src/config.ts`, actualiza:
```typescript
team: {
  producer: {
    name: 'Tu Nombre',
    bio: 'Tu biografía...'
  }
}
```

#### Reemplazar imágenes
Las imágenes actuales son de Unsplash (placeholder). Para usar las tuyas:

1. Coloca tus imágenes en `public/images/`
2. Actualiza las rutas en cada componente:
   ```html
   <img src="/images/tu-foto.jpg" alt="Descripción" />
   ```

### 3. Personalizar colores

Edita `tailwind.config.mjs`:
```javascript
colors: {
  nude: '#E8D5C4',  // Tu color acento 1
  gold: '#C9A978',  // Tu color acento 2
}
```

Los cambios se reflejan automáticamente en el navegador gracias al Hot Module Replacement (HMR).

## 📁 Estructura de Archivos

```
src/
├── components/          # Cada sección de la landing
│   ├── Hero.astro      # Banner principal
│   ├── About.astro     # Equipo
│   ├── Portfolio.astro # Galería de fotos
│   ├── Services.astro  # Servicios ofrecidos
│   ├── StudioNordelta.astro  # Coming soon
│   ├── Contact.astro   # Formulario
│   └── Footer.astro    # Pie de página
├── layouts/
│   └── Layout.astro    # Estructura HTML base
├── pages/
│   └── index.astro     # Página principal
├── scripts/
│   └── animations.js   # Animaciones
└── config.ts           # Configuración centralizada
```

## 🎨 Componentes

### Hero
Imagen fullscreen con título y botón CTA.
**Archivo**: `src/components/Hero.astro`

### About
Presentación del equipo (productora + fotógrafa).
**Archivo**: `src/components/About.astro`

### Portfolio
Grid de 9 imágenes con modal para ver en grande.
**Archivo**: `src/components/Portfolio.astro`

### Services
4 tarjetas con servicios ofrecidos.
**Archivo**: `src/components/Services.astro`

### Studio Nordelta
Sección "coming soon" con formulario de suscripción.
**Archivo**: `src/components/StudioNordelta.astro`

### Contact
Formulario de contacto + información.
**Archivo**: `src/components/Contact.astro`

### Footer
Links de navegación y redes sociales.
**Archivo**: `src/components/Footer.astro`

## 🎬 Animaciones

Todas las secciones tienen animaciones suaves al hacer scroll. Están implementadas con Anime.js.

Para modificar animaciones, edita: `src/scripts/animations.js`

## 📱 Responsive

El diseño es completamente responsive:
- **Mobile**: 1 columna
- **Tablet**: 2 columnas
- **Desktop**: 2-3 columnas

Usa las DevTools del navegador para probar en diferentes dispositivos.

## ✅ Checklist Antes de Publicar

- [ ] Actualizar información de contacto (email, teléfono, Instagram)
- [ ] Cambiar nombres y biografías del equipo
- [ ] Reemplazar imágenes placeholder con fotos reales
- [ ] Ajustar colores de marca en Tailwind config
- [ ] Revisar todos los textos
- [ ] Probar formulario de contacto
- [ ] Verificar links de redes sociales
- [ ] Probar en móvil, tablet y desktop
- [ ] Optimizar imágenes (usar TinyPNG o similar)
- [ ] Ejecutar `npm run build` para verificar que compila

## 🚀 Deploy

### Opción 1: Vercel (Recomendado)

1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Astro
4. ¡Deploy automático!

### Opción 2: Netlify

1. Ejecuta: `npm run build`
2. Arrastra la carpeta `dist/` a [netlify.com](https://netlify.com)
3. Tu sitio estará en vivo en segundos

### Opción 3: GitHub Pages

1. Instala: `npm install -D @astrojs/gh-pages`
2. Configura en `astro.config.mjs`
3. Push a GitHub
4. Activa GitHub Pages en settings del repo

## 📚 Documentación Adicional

- **README.md** - Documentación técnica completa
- **PERSONALIZACION.md** - Guía detallada de personalización
- **src/config.ts** - Variables de configuración

## 🆘 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview

# Verificar errores de TypeScript
npm run astro check
```

## 💡 Tips

1. **Hot Reload**: Los cambios se ven instantáneamente sin recargar
2. **Componentes modulares**: Cada sección es independiente
3. **Tailwind**: Usa clases de utilidad para estilos rápidos
4. **Animaciones**: Se activan automáticamente al hacer scroll
5. **Performance**: Astro pre-renderiza para máxima velocidad

## 🎯 Próximos Pasos

1. Personaliza los textos en cada componente
2. Reemplaza las imágenes con tus fotos reales
3. Ajusta los colores según tu marca
4. Prueba en diferentes dispositivos
5. ¡Despliega tu sitio!

---

**¿Dudas?** Revisa la documentación en README.md o PERSONALIZACION.md

**¡Éxito con tu proyecto CIAVA!** 🎉
