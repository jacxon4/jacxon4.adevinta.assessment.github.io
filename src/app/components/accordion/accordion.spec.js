import { createAccordion, EXPANDED_FEATURE } from './accordion';

describe('Accordion component', () => {
  let documentTree;
  beforeEach(() => {
    document.body.innerHTML = `
    <dl>
      <dt>Section 1</dt>
      <dd>
        <p>Section 1 Content...</p>
      </dd>
      <dt>Section 2</dt>
      <dd>
        <p>Section 2 Content...</p>
      </dd>
      <dt>Section 3</dt>
      <dd>
        <p>Section 3 Content...</p>
      </dd>
    </dl>
    `;
    documentTree = document.querySelector('dl');
  });

  const selectDDElements = () => document.querySelectorAll('dd');
  const selectDDElementsExpanded = () => document.querySelectorAll(`dd.${EXPANDED_FEATURE}`);
  const classListContains = (element, className) => element.classList.contains(className);

  it('should not expand any element if not provided', () => {
    createAccordion(documentTree);
    expect(document.querySelector(`dd.${EXPANDED_FEATURE}`)).toBeNull();
  });
  it('should expand only one element if provided', () => {
    createAccordion(documentTree, 0);
    const ddElements = selectDDElementsExpanded();
    expect(ddElements).not.toBeNull();
    expect(classListContains(ddElements[0], 'is-expanded')).toBe(true);
  });
  it('should toggle expansion to desired item', () => {
    createAccordion(documentTree);
    const elements = document.querySelectorAll('dt');
    const elementToExpand = elements[0];
    elementToExpand.click();
    const ddElements = selectDDElements();
    expect(classListContains(ddElements[0], 'is-expanded')).toBe(true);
    expect(classListContains(ddElements[1], 'is-expanded')).toBe(false);
    expect(classListContains(ddElements[2], 'is-expanded')).toBe(false);
  });
  it('should add items to the list', () => {
    const newItems = [
      {
        term: 'Section 4',
        description: 'Section 4 Content...',
      },
      {
        term: 'Section 5',
        description: 'Section 5 Content...',
      },
    ];
    const accordion = createAccordion(documentTree);
    accordion.addItems(newItems);

    const termElements = document.querySelectorAll('dt');
    const descriptionElements = document.querySelectorAll('dd');

    expect(termElements).toHaveLength(5);
    expect(termElements[3].textContent).toStrictEqual(newItems[0].term);
    expect(termElements[4].textContent).toStrictEqual(newItems[1].term);
    expect(descriptionElements).toHaveLength(5);
    expect(descriptionElements[3].textContent).toStrictEqual(newItems[0].description);
    expect(descriptionElements[4].textContent).toStrictEqual(newItems[1].description);
  });
});
