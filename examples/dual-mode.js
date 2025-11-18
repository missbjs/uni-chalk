#!/usr/bin/env node

// Example showing dual mode support in chalk
import chalk from '../source/index.js';

console.log('=== Chalk Dual Mode Example ===\n');

// Node.js mode (default)
console.log('Node.js mode output:');
console.log(chalk.hex('#ff6347').bold.underline('Hello World'));
console.log();

// Browser mode
const { Chalk } = await import('../source/index.js');
const browserChalk = new Chalk({ browserMode: true });
console.log('Browser mode output:');
const result = browserChalk.hex('#ff6347').bold.underline('Hello World');
console.log('Result type:', Array.isArray(result) ? 'Array' : 'String');
console.log('Result:', result);
console.log();

// How to use in browser console
console.log('To use in browser console:');
console.log('console.log(result[0], result[1]);');
console.log();

// Example of what it would look like in browser console
console.log('Simulated browser console output:');
if (Array.isArray(result)) {
  console.log(result[0], result[1]);
}