import { BestArticleToSupportPage } from './app.po';

describe('best-article-to-support App', () => {
  let page: BestArticleToSupportPage;

  beforeEach(() => {
    page = new BestArticleToSupportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
