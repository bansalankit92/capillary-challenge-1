import { ChallengeWebPage } from './app.po';

describe('challenge-web App', function() {
  let page: ChallengeWebPage;

  beforeEach(() => {
    page = new ChallengeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
