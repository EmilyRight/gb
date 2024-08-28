import detectDevice from './helpers/detectDevice';
import GTMEvents from './helpers/gtmEvents';
import { WOW } from './vendor/wow.min';

const GTM = new GTMEvents();
document.addEventListener('DOMContentLoaded', () => {
  new WOW().init();
  GTM.addEventListeners();
  detectDevice();
  getCurrentYear();
  scrollTeaser();
  goNextSection();
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

function goNextSection() {
  const goNextBtns = document.querySelectorAll('.js-go-next');
  const sectionsList = document.querySelectorAll('section');

  goNextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnParentNode = btn.closest('section');
      let sectionToScrollTo;
      sectionsList.forEach((el, index) => {
        if (el === btnParentNode) {
          sectionToScrollTo = sectionsList[index + 1];
          scrollToElement(sectionToScrollTo);
        }
      });
    });
  });
}
