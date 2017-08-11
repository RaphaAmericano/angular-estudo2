import { AngularEstudo2Page } from './app.po';

describe('angular-estudo2 App', () => {
  let page: AngularEstudo2Page;

  beforeEach(() => {
    page = new AngularEstudo2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
