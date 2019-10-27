import { createAccordion } from './components';
import { fetchSections } from './api';

const renderDocument = document => rootElement => {
  const root = document.getElementById(rootElement);
  const listToAccordion = root.querySelector('dl');
  if (listToAccordion !== undefined) {
    const accordion = createAccordion(listToAccordion);
    fetchSections().then(sections => accordion.addItems(sections));
  }
};
const render = renderDocument(document);

export default { render };
