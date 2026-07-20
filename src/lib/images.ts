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

/** Devuelve el ImageMetadata para una ruta guardada, o null si no existe. */
export function resolveImageSafe(path: string | undefined | null): ImageMetadata | null {
  if (!path) return null;
  const mod = modules[normalize(path)];
  return mod?.default ?? null;
}

/**
 * Devuelve el ImageMetadata para una ruta guardada.
 * Lanza un error claro (que rompe el build) si la imagen no existe, para detectar
 * rutas mal escritas antes de publicar.
 */
export function resolveImage(path: string): ImageMetadata {
  const img = resolveImageSafe(path);
  if (!img) {
    throw new Error(
      `[CIAVA] No se encontró la imagen "${path}". ` +
        `Verificá que el archivo exista dentro de src/assets/images/ y que la ruta empiece por "/src/assets/images/".`
    );
  }
  return img;
}
