import { fetchSections } from './sections-query-sevice';
import { mapSectionsToVM } from './mapper';

import * as serviceBase from './base-service';
import { SECTIONS_ENDPOINT } from './constants';

describe('Sections query service', () => {
  it('should call service with proper endpoint', async () => {
    const mockReturn = [
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
    const mockBaseService = jest.spyOn(serviceBase, 'handleFetch');
    mockBaseService.mockResolvedValue(mockReturn);

    const expectedReturn = mapSectionsToVM(mockReturn);

    const sections = fetchSections();
    await expect(sections).resolves.toEqual(expectedReturn);

    //Assert: Then <getHostDefaults> is called to retrieve default values
    expect(mockBaseService).toBeCalled();
    expect(mockBaseService).toHaveBeenCalledWith(SECTIONS_ENDPOINT, serviceBase.RestMethod.GET);
  });
});
