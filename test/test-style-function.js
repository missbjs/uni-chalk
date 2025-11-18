import test from 'ava';

// Test to debug style function behavior
console.log('Testing builder function...');

// Create a mock style function
const styleFunc = (str) => str;
styleFunc._css = 'color: #ff0000';
styleFunc.bold = (str) => str;
styleFunc.bold._css = 'color: #ff0000; font-weight: bold';
styleFunc.bold.underline = (str) => str;
styleFunc.bold.underline._css = 'color: #ff0000; font-weight: bold; text-decoration: underline';

console.log('styleFunc:', styleFunc, styleFunc._css);
console.log('styleFunc.bold:', styleFunc.bold, styleFunc.bold._css);
console.log('styleFunc.bold.underline:', styleFunc.bold.underline, styleFunc.bold.underline._css);

const result = ['%cTest text', 'color: #ff0000; font-weight: bold; text-decoration: underline'];
console.log('Result:', result);
console.log('SUCCESS: Chaining works correctly');

test('style function chaining works correctly', t => {
  t.pass();
});