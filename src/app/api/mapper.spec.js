import { mapSectionsToVM } from './mapper';

describe('Sections dommain mapper', () => {
  it('should map domain sections to view model', () => {
    const domainSections = [
      {
        id: 'section2',
        title: 'Section 2',
        content: 'Section 2 Content...',
      },
      {
        id: 'section3',
        title: 'Section 3',
        content: 'Section 3 Content...',
      },
    ];

    const expectedSections = [
      {
        term: 'Section 2',
        description: 'Section 2 Content...',
      },
      {
        term: 'Section 3',
        description: 'Section 3 Content...',
      },
    ];

    expect(mapSectionsToVM(domainSections)).toStrictEqual(expectedSections);
  });
});
