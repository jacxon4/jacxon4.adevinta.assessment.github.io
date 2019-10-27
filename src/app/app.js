import { createAccordion } from './components';
import { fetchSections } from './api/sections-query-sevice';

export const render = rootElement => {
  const root = document.getElementById(rootElement);
  if (root !== null) {
    const listToAccordion = root.querySelector('dl');
    if (listToAccordion !== null) {
      const accordion = createAccordion(listToAccordion);
      fetchSections().then(sections => accordion.addItems(sections));
    }
  }
};
