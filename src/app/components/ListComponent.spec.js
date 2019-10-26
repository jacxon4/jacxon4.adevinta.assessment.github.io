import { ListComponent, list } from './ListComponent';

describe('App', () => {
  it('should render a list', () => {
    expect(ListComponent()).toStrictEqual(list);
  });
});
