/**
 * Hero Animations
 * Animaciones específicas para la sección Hero usando Anime.js
 */
import anime from 'animejs';

/**
 * Efecto de escritura elegante para el título
 */
export function typewriterEffect() {
  const titleElement = document.getElementById('hero-title');
  const subtitleElement = document.getElementById('hero-subtitle');
  
  if (!titleElement) return;
  
  const text = titleElement.textContent;
  titleElement.textContent = '';
  titleElement.style.opacity = '1';
  
  // Ocultar subtítulo inicialmente
  if (subtitleElement) {
    subtitleElement.style.opacity = '0';
  }
  
  // Crear spans para cada letra con espacio incluido
  const letters = text.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    titleElement.appendChild(span);
    return span;
  });
  
  // Animar cada letra apareciendo con Anime.js
  anime.timeline({
    easing: 'easeOutQuad',
  })
  .add({
    targets: letters,
    opacity: [0, 1],
    duration: 800,
    delay: anime.stagger(120), // 120ms entre cada letra para elegancia
    easing: 'easeOutQuad',
  })
  .add({
    targets: subtitleElement,
    opacity: [0, 1],
    duration: 1200,
    easing: 'easeOutQuart',
  }, '+=400'); // Esperar 400ms después de completar el título
}

/**
 * Inicializar animaciones del hero
 */
function initHeroAnimations() {
  // Esperar un momento para que la página cargue
  setTimeout(() => {
    typewriterEffect();
  }, 500);
}

// Ejecutar cuando la página carga
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroAnimations);
  } else {
    initHeroAnimations();
  }
  
  // También ejecutar en navegación SPA de Astro
  document.addEventListener('astro:page-load', initHeroAnimations);
}
