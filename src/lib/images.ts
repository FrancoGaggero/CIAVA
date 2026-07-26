import type { ImageMetadata } from 'astro';

/**
 * Resolver de imágenes para contenido editable desde el CMS.
 *
 * El CMS guarda en los archivos de datos (src/data/**) rutas de imagen como strings,
 * por ejemplo "/src/assets/images/hero/fondo.jpeg". Astro necesita el `ImageMetadata`
 * (el objeto que devuelve `import ...`) para optimizar la imagen con el componente <Image>
 * o con getImage(). Este helper hace ese puente: toma la ruta guardada y devuelve el
 * `ImageMetadata` correspondiente, buscándolo en un glob eager de todas las imágenes.
 *
 * Así, cuando ella sube una foto nueva desde el panel /admin, queda referenciada por su
 * ruta y sigue pasando por la optimización de Astro (WebP, thumbnails, etc.).
 *
 * IMPORTANTE — resiliencia del build:
 * Estos resolvers NUNCA rompen el build si falta una imagen. Desde el CMS es fácil dejar
 * una referencia "colgada" (por ejemplo, elegir de la biblioteca de medios una foto que
 * quedó en otra carpeta o que no llegó a commitearse). Antes eso tiraba abajo TODO el
 * deploy de Netlify. Ahora, una imagen faltante se omite y queda un aviso en el log del
 * build para poder corregirla, pero el sitio se publica igual.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP,AVIF,GIF}',
  { eager: true }
);

function normalize(path: string): string {
  // Acepta rutas con o sin "/" inicial y limpia un posible "./" o "../".
  let p = path.trim().replace(/^\.{1,2}\//, '');
  if (!p.startsWith('/')) p = '/' + p;
  return p;
}

/** Devuelve el ImageMetadata para una ruta guardada, o null si no existe (silencioso). */
export function resolveImageSafe(path: string | undefined | null): ImageMetadata | null {
  if (!path) return null;
  const mod = modules[normalize(path)];
  return mod?.default ?? null;
}

/**
 * Igual que `resolveImageSafe`, pero deja un aviso en el log del build cuando la ruta
 * apunta a una imagen que no existe. Usalo para imágenes editables desde el CMS: si falta,
 * devuelve null (quien la use debe omitirla) sin romper el build.
 *
 * @param label Etiqueta opcional para identificar en el log de dónde viene la imagen.
 */
export function resolveImageWarn(
  path: string | undefined | null,
  label?: string
): ImageMetadata | null {
  const img = resolveImageSafe(path);
  if (!img && path) {
    console.warn(
      `[CIAVA] ⚠ Imagen no encontrada${label ? ` (${label})` : ''}: "${path}". ` +
        `Se omite del sitio. Verificá que el archivo exista dentro de src/assets/images/ ` +
        `y que se haya subido/commiteado junto con el cambio del CMS.`
    );
  }
  return img;
}
