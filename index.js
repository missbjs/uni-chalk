// Unified Chalk entry point
// Automatically loads the appropriate version based on environment

// Export the main Node.js version
import chalkNode from './source/index.js';
import chalkBrowser from './source/chalk.browser.js';
export * from './source/index.js';


// For convenience, also export a function that detects the environment
// This version returns a promise that resolves to the chalk instance
export function createChalk({ isTerminal = true }) {
    if (isTerminal)
        return chalkNode;
    else if (isTerminal === false)
        return chalkBrowser;

    //isTerminal is undefined

    // Check if we're in a TTY environment (Node.js terminal)
    const isTTY = typeof process !== 'undefined' &&
        process.stdout &&
        process.stdout.isTTY !== undefined;

    // Check if we're in a browser environment
    const isBrowser = typeof window !== 'undefined' &&
        typeof window.document !== 'undefined';

    if (isTTY || (!isBrowser && typeof process !== 'undefined')) {
        // Return the main Node.js version for TTY environments
        return chalkNode //import('./source/index.js').then(module => module.default);
    } else {
        // Return the browser version for browser environments or non-TTY Node.js
        return chalkBrowser //import('./source/chalk.browser.js').then(module => module.default);
    }
}

// // Create and export the default chalk instance based on environment
// // This will be a promise that resolves to the appropriate chalk instance

// // Check if we're in a TTY environment (Node.js terminal)
// const isTTY = typeof process !== 'undefined' &&
//     process.stdout &&
//     process.stdout.isTTY !== undefined;

// // Check if we're in a browser environment
// const isBrowser = typeof window !== 'undefined' &&
//     typeof window.document !== 'undefined';

// // Determine which version to use as default
// let defaultChalk;
// if (isTTY || (!isBrowser && typeof process !== 'undefined')) {
//     // For TTY environments, use the Node.js version
//     defaultChalk = import('./source/index.js').then(module => module.default);
// } else {
//     // For browser environments, use the browser version
//     defaultChalk = import('./source/chalk.browser.js').then(module => module.default);
// }

export const chalk = createChalk({ isTerminal: false });
export default chalk;
export { chalkBrowser, chalkNode }
