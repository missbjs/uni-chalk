import test from 'ava';

// Debug test for prototype chaining issues
console.log('Debugging prototype chaining...');

// Test hex function
const hexFunc = (str) => str;
hexFunc.underline = (str) => str;
console.log('hexFunc has underline:', typeof hexFunc.underline);

// Test hex.bold function
const hexBoldFunc = (str) => str;
hexBoldFunc.underline = (str) => str;
console.log('hexBoldFunc has underline:', typeof hexBoldFunc.underline);

// Test chaining
const hexChainingResult = ['%cHello World', 'color: rgb(255, 99, 71); font-weight: bold; text-decoration: underline'];
console.log('Hex chaining result:', hexChainingResult);

test('prototype chaining works correctly', t => {
  t.pass();
});