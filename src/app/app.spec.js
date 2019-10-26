import { renderList, list } from './app';

describe('App', () => {
  it('should render a list', () => {
    expect(renderList()).toStrictEqual(list);
  });
});
