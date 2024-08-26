import detectDevice from './helpers/detectDevice';
import GTMEvents from './helpers/gtmEvents';
import { WOW } from './vendor/wow.min';

const GTM = new GTMEvents();
document.addEventListener('DOMContentLoaded', () => {
  new WOW().init();
  detectDevice();
  getCurrentYear();
  scrollTeaser();
});

function getCurrentYear() {
  const yearSpan = document.querySelectorAll('.current-year');
  yearSpan.forEach((span) => {
    span.innerHTML = new Date().getFullYear().toString();
  });
}

function scrollTeaser() {
  const { hash } = window.location;
  if (hash) {
    const id = hash.slice(1);
    const section = document.getElementById(id);
    scrollToElement(section);
  }
}

function scrollToElement(el) {
  const offs = 0;
  const y = el.getBoundingClientRect().top + window.scrollY + offs;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
