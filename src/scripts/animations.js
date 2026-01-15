/**
 * Librería de animaciones reutilizables usando Anime.js
 * Para CIAVA Landing Page
 */

import anime from 'animejs';

/**
 * Fade in con slide desde abajo
 * @param {string|HTMLElement} element - Selector o elemento DOM
 * @param {number} delay - Delay en ms (opcional)
 */
export function fadeInUp(element, delay = 0) {
  anime({
    targets: element,
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 1200,
    delay: delay,
    easing: 'easeOutExpo',
  });
}

/**
 * Reveal escalonado de múltiples elementos
 * @param {string|NodeList} elements - Selector o lista de elementos
 * @param {number} stagger - Tiempo entre elementos en ms
 */
export function staggerReveal(elements, stagger = 150) {
  anime({
    targets: elements,
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 800,
    delay: anime.stagger(stagger),
    easing: 'easeOutQuad',
  });
}

/**
 * Grid reveal con fade + scale
 * @param {string|NodeList} elements - Selector o lista de elementos
 * @param {number} stagger - Tiempo entre elementos en ms
 */
export function staggerGrid(elements, stagger = 100) {
  anime({
    targets: elements,
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(stagger, { grid: [3, 3], from: 'center' }),
    easing: 'easeOutExpo',
  });
}

/**
 * Slide in desde una dirección
 * @param {string|HTMLElement} element - Selector o elemento DOM
 * @param {string} direction - 'left', 'right', 'top', 'bottom'
 * @param {number} delay - Delay en ms (opcional)
 */
export function slideIn(element, direction = 'left', delay = 0) {
  const directions = {
    left: { translateX: [-60, 0] },
    right: { translateX: [60, 0] },
    top: { translateY: [-60, 0] },
    bottom: { translateY: [60, 0] },
  };

  anime({
    targets: element,
    ...directions[direction],
    opacity: [0, 1],
    duration: 1000,
    delay: delay,
    easing: 'easeOutCubic',
  });
}

/**
 * Animación de glow suave
 * @param {string|HTMLElement} element - Selector o elemento DOM
 */
export function glowPulse(element) {
  anime({
    targets: element,
    boxShadow: [
      '0 0 20px rgba(201, 169, 120, 0.3)',
      '0 0 40px rgba(201, 169, 120, 0.6)',
      '0 0 20px rgba(201, 169, 120, 0.3)',
    ],
    duration: 3000,
    loop: true,
    easing: 'easeInOutQuad',
  });
}

/**
 * Observer para trigger de animaciones en scroll
 * @param {string} selector - Selector de elementos a observar
 * @param {function} animationFn - Función de animación a ejecutar
 */
export function setupScrollAnimation(selector, animationFn) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationFn(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));
}
