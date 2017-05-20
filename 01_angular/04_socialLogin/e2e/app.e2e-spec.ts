import { SocialLoginPage } from './app.po';

describe('social-login App', () => {
  let page: SocialLoginPage;

  beforeEach(() => {
    page = new SocialLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
