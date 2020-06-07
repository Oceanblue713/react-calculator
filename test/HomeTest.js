// const strings = require('./Selector');

// describe("Hope page contents", () => {
//   before(() => {
//     browser.url(strings.url);
//   })

//   it("title is Kitchen Calculator", () => {
//     const title = browser.getTitle();
//     expect(title).to.equal("Kitchen Calculator");
//   });

//   it("has Kitchen Calculator h1 header", () => {
//     const h1 = $("h1").getText();
//     expect(h1).to.equal("Kitchen Calculator");
//   });

//   it("has time component", () => {
//     const timeCmp = browser.$('.Time');
//     const isExisting = timeCmp.isExisting();
//     expect(isExisting).to.be.true;
//   });
// });

// describe("Hope page buttons", () => {
//   beforeEach(() => {
//     browser.url(strings.url);
//   });

//   it("click the About button", () => {
//     $(strings.homeAboutButton).click();
//   });

//   it("click the Calculator button", () => {
//     $(strings.homeCalculatorButton).click();
//   });

//   it("click the Watch button", () => {
//     $(strings.homeWatchButton).click();
//   });
// });
