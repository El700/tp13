import { Tp13Page } from './app.po';

describe('tp13 App', function() {
  let page: Tp13Page;

  beforeEach(() => {
    page = new Tp13Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
