import { IcoClusterPage } from './app.po';

describe('ico-cluster App', () => {
  let page: IcoClusterPage;

  beforeEach(() => {
    page = new IcoClusterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
