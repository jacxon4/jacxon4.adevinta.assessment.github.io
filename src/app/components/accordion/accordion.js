export const EXPANDED_FEATURE = 'is-expanded';

const accordion = (rootElement, expandedItem) => {
  const accordionItems = rootElement.querySelectorAll('dt');
  function addListeners(elements) {
    elements.forEach(element => addListenerToElement(element));
  }

  function addListenerToElement(element) {
    element.addEventListener('click', event => handleExpansion(event));
  }
  function handleExpansion(event) {
    toggleExpanded(event.target);
  }
  function toggleExpanded(target) {
    // No reflow using classList interaction
    accordionItems.forEach(item => item.nextElementSibling.classList.remove(EXPANDED_FEATURE));
    target.nextElementSibling.classList.toggle(EXPANDED_FEATURE);
  }
  if (accordionItems !== undefined) {
    addListeners(accordionItems);
    expandedItem !== null && toggleExpanded(accordionItems[expandedItem]);
  }
};
export const createAccordion = (rootElement, expandedItem = null) => accordion(rootElement, expandedItem);
