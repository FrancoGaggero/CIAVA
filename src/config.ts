/**
 * Configuración centralizada de CIAVA Studio.
 *
 * El contenido editable vive en archivos JSON dentro de `src/data/`, que son los que
 * modifica el panel de administración (/admin). Este archivo simplemente los agrupa para
 * poder importarlos desde un único lugar si hace falta. Para cambiar textos/imágenes,
 * usá el panel /admin (o editá los JSON de `src/data/`), NO este archivo.
 */
import settings from './data/settings.json';
import team from './data/team.json';
import servicesData from './data/services.json';
import intro from './data/intro.json';
import hero from './data/hero.json';

export const config = {
  siteName: settings.siteName,
  siteDescription: settings.siteDescription,
  siteUrl: 'https://ciavastudio.com',
  contact: settings.contact,
  team,
  services: servicesData.services,
  intro,
  hero,
};

export default config;
