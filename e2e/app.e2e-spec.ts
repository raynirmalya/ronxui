import { RonxuiPage } from './app.po';

describe('ronxui App', () => {
  let page: RonxuiPage;

  beforeEach(() => {
    page = new RonxuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
