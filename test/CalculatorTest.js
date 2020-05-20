const strings = require('./Selector');

describe('Kitchen Calculator Titles', () => {
  before(() => {
    browser.url(strings.url);
    browser.setWindowSize(375, 667)
  });

  it('title is Kitchen Calculator', () => {
    const title = browser.getTitle();
    expect(title).to.equal("Kitchen Calculator");
  });
});

describe('The formulas', () => {
  before(() => {
    browser.url(strings.url);
  });

  afterEach(() => {
    browser.pause(2000);
  });

  it('oz to ml', () => {
    $(strings.ozInput).setValue('1');
    const mlFormValue = $(strings.mlFormValue).getText();
    expect(mlFormValue).to.equal("29.57 ml");
  });

  it('Ib to Kg', () => {
    $(strings.lbInput).setValue('1');
    const kgFormValue = $(strings.kgFormValue).getText();
    expect(kgFormValue).to.equal("0.45 Kg");
  });

  it('Tablespoon to Teaspoon', () => {
    $(strings.tablespoonInput).setValue('1');
    const teaspoonFormValue = $(strings.teaspoonInput).getText();
    expect(teaspoonFormValue).to.equal("3 Teaspoon");
  });

  it('Celicious to Fahrenheit', () => {
    $(strings.celiciousInput).setValue('1');
    const fahrenheitFormValue = $(strings.fahrenheitFormValue).getText();
    expect(fahrenheitFormValue).to.equal("33.80 F");
  });
});
