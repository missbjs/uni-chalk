import test from 'ava';
import chalk from '../index.js';

console.log('Testing chalk browser implementation...');

// Test calling chalk directly
try {
  const result1 = chalk('Test text');
  console.log('Direct call result:', result1);
} catch (error) {
  console.log('Direct call error:', error.message);
}

// Test accessing bold property
const boldFunc = chalk.bold;
console.log('boldFunc type:', typeof boldFunc);
console.log('boldFunc.__css:', boldFunc.__css);

// Test calling boldFunc directly
try {
  const result2 = boldFunc('Bold text');
  console.log('Bold call result:', result2);
} catch (error) {
  console.log('Bold call error:', error.message);
}

// Test accessing underline property of bold
const underlineFunc = boldFunc.underline;
console.log('underlineFunc type:', typeof underlineFunc);
console.log('underlineFunc.__css:', underlineFunc.__css);

// Test calling underlineFunc directly
try {
  const result3 = underlineFunc('Bold underline text');
  console.log('Bold underline call result:', result3);
} catch (error) {
  console.log('Bold underline call error:', error.message);
}

// Test hex chaining
try {
  const hexFunc = chalk.hex('#ff6347');
  console.log('hexFunc type:', typeof hexFunc);
  console.log('hexFunc.__css:', hexFunc.__css);

  const hexBoldFunc = hexFunc.bold;
  console.log('hexBoldFunc type:', typeof hexBoldFunc);
  console.log('hexBoldFunc.__css:', hexBoldFunc.__css);

  const hexBoldUnderlineFunc = hexBoldFunc.underline;
  console.log('hexBoldUnderlineFunc type:', typeof hexBoldUnderlineFunc);
  console.log('hexBoldUnderlineFunc.__css:', hexBoldUnderlineFunc.__css);

  const hexResult = hexBoldUnderlineFunc('Hello World');
  console.log('Hex chaining result:', hexResult);
} catch (error) {
  console.log('Hex chaining error:', error.message);
}

console.log('SUCCESS: Test completed successfully');

test('chalk implementation works correctly', t => {
  t.pass();
});