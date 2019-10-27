import './styles.sass';

export const EXPANDED_FEATURE = 'is-expanded';
export const ACCORDION_CLASSNAME = 'Accordion';
export const ACCORDION_ITEM_CLASSNAME = 'itemTerm';
export const ACCORDION_DESCRIPTION_CLASSNAME = 'itemDescription';

const accordion = (rootElement, expandedItem) => {
  let accordionItems = rootElement.querySelectorAll('dt');
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
  function setUpClasses(root) {
    root.classList.add(ACCORDION_CLASSNAME);
    accordionItems.forEach(item => {
      item.classList.add(`${ACCORDION_CLASSNAME}-${ACCORDION_ITEM_CLASSNAME}`);
      item.nextElementSibling.classList.add(`${ACCORDION_CLASSNAME}-${ACCORDION_DESCRIPTION_CLASSNAME}`);
    });
  }

  function createItem(item) {
    const itemTerm = document.createElement('dt');
    addListenerToElement(itemTerm);
    const itemText = document.createTextNode(item.term);
    itemTerm.appendChild(itemText);
    const itemDescription = document.createElement('dd');
    const pDescription = document.createElement('p');
    const itemDescriptionText = document.createTextNode(item.description);
    pDescription.appendChild(itemDescriptionText);
    itemDescription.appendChild(pDescription);
    rootElement.appendChild(itemTerm);
    rootElement.appendChild(itemDescription);
  }
  function addItems(items) {
    items.forEach(item => createItem(item));
    accordionItems = rootElement.querySelectorAll('dt');
    setUpClasses(rootElement);
  }

  if (accordionItems !== undefined) {
    setUpClasses(rootElement);
    addListeners(accordionItems);
    expandedItem !== null && toggleExpanded(accordionItems[expandedItem]);
  }
  return { addItems };
};
export const createAccordion = (rootElement, expandedItem = null) => accordion(rootElement, expandedItem);
