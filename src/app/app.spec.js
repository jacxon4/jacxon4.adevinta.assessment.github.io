import { render } from './app';
import * as service from './api/sections-query-sevice';

describe('Application', () => {
  let mockFetchSections;
  beforeEach(() => {
    mockFetchSections = jest.spyOn(service, 'fetchSections').mockResolvedValue([]);
  });
  const createDocument = id => {
    document.body.innerHTML = `
          <div id=${id}>
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
          </div>
    `;
  };
  it('should NOT call createAccordion when no root element item on document', () => {
    render('root');
    expect(mockFetchSections).not.toHaveBeenCalled();
  });
  it('should NOT call createAccordion when no dl element item on document', () => {
    const rootId = 'root';
    document.body.innerHTML = `<div id=${rootId}></div>`;
    render(rootId);
    expect(mockFetchSections).not.toHaveBeenCalled();
  });
  it('should call createAccordion add items from the ajax call', () => {
    const rootId = 'root';
    createDocument(rootId);
    render(rootId);
    expect(mockFetchSections).toHaveBeenCalled();
  });
});
