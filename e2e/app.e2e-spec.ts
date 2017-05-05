import { HubPage } from './app.po';

describe('hub App', () => {
  let page: HubPage;

  beforeEach(() => {
    page = new HubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('Connection to better health');
  });
});
