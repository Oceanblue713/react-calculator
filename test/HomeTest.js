const strings = require('./Selector');

describe("Hope page", () => {
  beforeEach(() => {
    browser.url(strings.url);
  });

  it("click about button", () => {
    console.log(strings.homeAboutButton);
  })
})