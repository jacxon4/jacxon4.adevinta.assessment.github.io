import * as serviceBase from './base-service';
import { SECTIONS_ENDPOINT } from './constants';
import { mapSectionsToVM } from './mapper';

export const fetchSections = () => {
  return serviceBase
    .handleFetch(SECTIONS_ENDPOINT, serviceBase.RestMethod.GET)
    .then(sections => mapSectionsToVM(sections))
    .catch(error => {
      throw error;
    });
};
