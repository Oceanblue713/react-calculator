describe('Kitchen Calculator Titles', () => {
  beforeEach(() => {
    browser.url('https://master.ds6e6jixc9bcf.amplifyapp.com/');
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
    const mlFormValue = $("div:nth-of-type(1) > .box-item > h1:nth-of-type(2)").getText();
    expect(mlFormValue).to.equal("29.57 ml");
    browser.pause(2000);
  });

  it('Ib to Kg', () => {
    const lbForm = "div:nth-of-type(2) > .box-item > input"
    $(lbForm).setValue('1');
    const kgFormValue = $("div:nth-of-type(2) > .box-item > h1:nth-of-type(2)").getText();
    expect(kgFormValue).to.equal("0.45 Kg");
    browser.pause(2000);
  });
});
