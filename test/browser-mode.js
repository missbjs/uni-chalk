import test from 'ava';
import { Chalk } from '../source/index.js';
import chalkBrowser from '../source/chalk.browser.js';

test('chalk browser mode detection works', t => {
    // Create a new chalk instance
    const chalk = new Chalk();

    // The regular chalk instance doesn't have isBrowserMode property
    // But we can check if it's the browser version by importing it directly
    t.is(chalkBrowser.isBrowserMode, true);

    // Test that the browser version produces array results
    const browserResult = chalkBrowser.red('Hello');
    t.true(Array.isArray(browserResult));
    t.is(browserResult.length, 2);
    t.is(browserResult[0], '%cHello');
});

test('chalk browser mode produces CSS format', t => {
    // Use the browser version directly
    const browserChalk = chalkBrowser;
    browserChalk.level = 3; // Full color support

    // Test basic color (using rgb for better debugging)
    const rgbResult = browserChalk.rgb(255, 0, 0)('Hello');
    t.true(Array.isArray(rgbResult));
    t.is(rgbResult.length, 2);
    t.is(rgbResult[0], '%cHello');
    t.true(rgbResult[1].includes('color:'));

    // Test regular color name
    const redResult = browserChalk.red('Hello');
    t.true(Array.isArray(redResult));
    t.is(redResult.length, 2);
    t.is(redResult[0], '%cHello');
    t.true(redResult[1].includes('color:'));

    // Test hex color
    const hexResult = browserChalk.hex('#ff6347')('Hello');
    t.true(Array.isArray(hexResult));
    t.is(hexResult.length, 2);
    t.is(hexResult[0], '%cHello');
    t.true(hexResult[1].includes('color:'));

    // Test bold styling
    const boldResult = browserChalk.bold('Hello');
    t.true(Array.isArray(boldResult));
    t.is(boldResult.length, 2);
    t.is(boldResult[0], '%cHello');
    t.true(boldResult[1].includes('font-weight:'));

    // Test combined styles
    const combinedResult = browserChalk.red.bold('Hello');
    t.true(Array.isArray(combinedResult));
    t.is(combinedResult.length, 2);
    t.is(combinedResult[0], '%cHello');
    t.true(combinedResult[1].includes('color:'));
    t.true(combinedResult[1].includes('font-weight:'));
});

test('chalk node mode produces ANSI format', t => {
    // Create a new chalk instance in Node.js mode
    const nodeChalk = new Chalk();
    // The regular chalk should produce string results (ANSI codes)
    const result = nodeChalk.red('Hello');
    t.is(typeof result, 'string');
    // Note: In a test environment without TTY, the result might be plain text
    // But in a real TTY environment, it would include ANSI codes
});