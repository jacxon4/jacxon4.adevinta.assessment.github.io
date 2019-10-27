import { createAccordion } from './components';

const renderDocument = document => rootElement => {
  const root = document.getElementById(rootElement);
  const listToAccordion = root.querySelector('dl');
  !!listToAccordion && createAccordion(listToAccordion);
};
const render = renderDocument(document);

export default { render };
