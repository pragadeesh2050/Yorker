import { YorkerPage } from './app.po';

describe('yorker App', function() {
  let page: YorkerPage;

  beforeEach(() => {
    page = new YorkerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
