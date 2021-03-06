const strings = require('./Selector');

describe('Kitchen Calculators', () => {
  before(() => {
    browser.url(strings.url);
    $(strings.homeCalculatorButton).click();
    browser.setWindowSize(375, 667);
    browser.pause(2000);
  });

  afterEach(() => {
    browser.pause(2000);
  });

  it('oz to ml', () => {
    $(strings.ozInput).setValue('1');
    const mlFormValue = $(strings.mlFormValue).getText();
    expect(mlFormValue).to.equal("29.57 ml");
  });

  // it('Ib to Kg', () => {
  //   $(strings.lbInput).setValue('1');
  //   const kgFormValue = $(strings.kgFormValue).getText();
  //   expect(kgFormValue).to.equal("0.45 Kg");
  // });

  // it('Tablespoon to Teaspoon', () => {
  //   $(strings.tablespoonInput).setValue('1');
  //   const teaspoonFormValue = $(strings.teaspoonInput).getText();
  //   expect(teaspoonFormValue).to.equal("3 Teaspoon");
  // });

  // it('Celicious to Fahrenheit', () => {
  //   $(strings.celiciousInput).setValue('1');
  //   const fahrenheitFormValue = $(strings.fahrenheitFormValue).getText();
  //   expect(fahrenheitFormValue).to.equal("33.80 F");
  // });
});
