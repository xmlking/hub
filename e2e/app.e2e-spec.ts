import { HubPage } from './app.po';

describe('hub App', function() {
  let page: HubPage;

  beforeEach(() => {
    page = new HubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
