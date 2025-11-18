// Unified Chalk entry point
// Automatically loads the appropriate version based on environment

// Export the main Node.js version
import chalkNode from './source/index.js';
import chalkBrowser from './source/chalk.browser.js';
export * from './source/index.js';


// For convenience, also export a function that detects the environment
// This version returns the appropriate chalk instance based on environment
export function createChalk({ isTerminal } = {}) {
    // If isTerminal is explicitly provided, use it
    if (isTerminal === true)
        return chalkNode;
    else if (isTerminal === false)
        return chalkBrowser;

    // isTerminal is undefined, auto-detect environment
    // Check if we're in a TTY environment (Node.js terminal)
    const isTTY = typeof process !== 'undefined' &&
        process.stdout &&
        process.stdout.isTTY !== undefined;

    // Check if we're in a browser environment
    const isBrowser = typeof window !== 'undefined' &&
        typeof window.document !== 'undefined';

    if (isBrowser) {
        // Return the browser version for browser environments
        return chalkBrowser;
    } else if (isTTY || typeof process !== 'undefined') {
        // Return the main Node.js version for TTY environments or Node.js environments
        return chalkNode;
    } else {
        // Fallback to browser version for non-TTY Node.js or unknown environments
        return chalkBrowser;
    }
}

export const chalk = createChalk();
export default chalk;
export { chalkBrowser, chalkNode }