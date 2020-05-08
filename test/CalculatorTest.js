describe('Kitchen Calculator Titles', () => {
  before(() => {
    browser.url('https://master.ds6e6jixc9bcf.amplifyapp.com/');
    $("h2").waitForExist({ timeout: 5000 });
  });

  it('title is Kitchen Calculator', () => {
    const title = browser.getTitle();
    // expect(title).to.equal("Kitchen Calculator");
  });
});

describe('The formulas', () => {
  before(() => {
    browser.url('https://master.ds6e6jixc9bcf.amplifyapp.com/');
  });

  it('oz to ml', () => {
    const ozForm = "div:nth-of-type(1) > .box-item > input"
    $(ozForm).setValue('1');
    const mlForm = $("div:nth-of-type(1) > .box-item > h1:nth-of-type(2)").getText();
    expect(mlForm).to.equal("29.57 ml");
  });
});
