// const strings = require('./Selector');

// describe('StopWatch', () => {
//   before(() => {
//     browser.url(strings.url);
//     browser.setWindowSize(375, 667);
//   });

//   it('Stop button is not visible', () => {
//     const stopButton = $(strings.StopWatchStopButton).isDisplayed();
//     expect(stopButton).to.equal(false);
//   });

//   it('Start button is clickable', () => {
//     $(strings.StopWatchStartButton).click();
//     browser.pause(5000);
//     const stopButton = $(strings.StopWatchStopButton).isDisplayed();
//     expect(stopButton).to.equal(true);
//   });
// });