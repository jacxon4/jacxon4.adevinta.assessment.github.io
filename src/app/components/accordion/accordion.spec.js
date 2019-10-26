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
  const getClassList = element => element.classList[0];

  it('should not expand any element if not provided', () => {
    createAccordion(documentTree);
    expect(document.querySelector(`dd.${EXPANDED_FEATURE}`)).toBeNull();
  });
  it('should expand only one element if provided', () => {
    createAccordion(documentTree, 0);
    const ddElements = selectDDElementsExpanded();
    expect(ddElements).not.toBeNull();
    expect(getClassList(ddElements[0])).toStrictEqual('is-expanded');
  });

  it('should toggle expansion to desired item', () => {
    createAccordion(documentTree);
    const elements = document.querySelectorAll('dt');
    const elementToExpand = elements[0];
    elementToExpand.click();
    const ddElements = selectDDElements();
    expect(getClassList(ddElements[0])).toStrictEqual('is-expanded');
    expect(getClassList(ddElements[1])).toBeUndefined();
    expect(getClassList(ddElements[2])).toBeUndefined();
  });
});
