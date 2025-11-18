// Bundled browser version of chalk
// This is a simplified version that works in browsers without import maps

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

// Convert hex color to RGB
const hexToRgb = (hex) => {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return [r, g, b];
};

// Convert RGB to CSS color
const rgbToCss = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

// Convert hex to CSS
const hexToCss = (hex) => {
  const [r, g, b] = hexToRgb(hex);
  return rgbToCss(r, g, b);
};

// Helper to create styled results
const createStyledResult = (str, css) => {
  return [`%c${str}`, css];
};

// Create the prototype with all styles
const styles = {};

// Add all style methods to the styles object
styles.reset = {
  get() {
    const newCss = this._css ? `${this._css}; ` : '';
    return createBuilder(newCss);
  }
};

styles.bold = {
  get() {
    const newCss = this._css ? `${this._css}; font-weight: bold` : 'font-weight: bold';
    return createBuilder(newCss);
  }
};

styles.dim = {
  get() {
    const newCss = this._css ? `${this._css}; opacity: 0.5` : 'opacity: 0.5';
    return createBuilder(newCss);
  }
};

styles.italic = {
  get() {
    const newCss = this._css ? `${this._css}; font-style: italic` : 'font-style: italic';
    return createBuilder(newCss);
  }
};

styles.underline = {
  get() {
    const newCss = this._css ? `${this._css}; text-decoration: underline` : 'text-decoration: underline';
    return createBuilder(newCss);
  }
};

styles.inverse = {
  get() {
    const newCss = this._css ? `${this._css}; filter: invert(100%)` : 'filter: invert(100%)';
    return createBuilder(newCss);
  }
};

styles.hidden = {
  get() {
    const newCss = this._css ? `${this._css}; visibility: hidden` : 'visibility: hidden';
    return createBuilder(newCss);
  }
};

styles.strikethrough = {
  get() {
    const newCss = this._css ? `${this._css}; text-decoration: line-through` : 'text-decoration: line-through';
    return createBuilder(newCss);
  }
};

// Text colors
styles.black = {
  get() {
    const newCss = this._css ? `${this._css}; color: #000000` : 'color: #000000';
    return createBuilder(newCss);
  }
};

styles.red = {
  get() {
    const newCss = this._css ? `${this._css}; color: #ff0000` : 'color: #ff0000';
    return createBuilder(newCss);
  }
};

styles.green = {
  get() {
    const newCss = this._css ? `${this._css}; color: #00ff00` : 'color: #00ff00';
    return createBuilder(newCss);
  }
};

styles.yellow = {
  get() {
    const newCss = this._css ? `${this._css}; color: #ffff00` : 'color: #ffff00';
    return createBuilder(newCss);
  }
};

styles.blue = {
  get() {
    const newCss = this._css ? `${this._css}; color: #0000ff` : 'color: #0000ff';
    return createBuilder(newCss);
  }
};

styles.magenta = {
  get() {
    const newCss = this._css ? `${this._css}; color: #ff00ff` : 'color: #ff00ff';
    return createBuilder(newCss);
  }
};

styles.cyan = {
  get() {
    const newCss = this._css ? `${this._css}; color: #00ffff` : 'color: #00ffff';
    return createBuilder(newCss);
  }
};

styles.white = {
  get() {
    const newCss = this._css ? `${this._css}; color: #ffffff` : 'color: #ffffff';
    return createBuilder(newCss);
  }
};

styles.gray = {
  get() {
    const newCss = this._css ? `${this._css}; color: #808080` : 'color: #808080';
    return createBuilder(newCss);
  }
};

// Background colors
styles.bgBlack = {
  get() {
    const newCss = this._css ? `${this._css}; background-color: #000000` : 'background-color: #000000';
    return createBuilder(newCss);
  }
};

styles.bgRed = {
  get() {
    const newCss = this._css ? `${this._css}; background-color: #ff0000` : 'background-color: #ff0000';
    return createBuilder(newCss);
  }
};

styles.bgGreen = {
  get() {
    const newCss = this._css ? `${this._css}; background-color: #00ff00` : 'background-color: #00ff00';
    return createBuilder(newCss);
  }
};

styles.bgYellow = {
  get() {
    const newCss = this._css ? `${this._css}; background-color: #ffff00` : 'background-color: #ffff00';
    return createBuilder(newCss);
  }
};

styles.bgBlue = {
  get() {
    const newCss = this._css ? `${this._css}; background-color: #0000ff` : 'background-color: #0000ff';
    return createBuilder(newCss);
  }
};

styles.bgMagenta = {
  get() {
    const newCss = this._css ? `${this._css}; background-color: #ff00ff` : 'background-color: #ff00ff';
    return createBuilder(newCss);
  }
};

styles.bgCyan = {
  get() {
    const newCss = this._css ? `${this._css}; background-color: #00ffff` : 'background-color: #00ffff';
    return createBuilder(newCss);
  }
};

styles.bgWhite = {
  get() {
    const newCss = this._css ? `${this._css}; background-color: #ffffff` : 'background-color: #ffffff';
    return createBuilder(newCss);
  }
};

// Special methods
styles.hex = {
  get() {
    return (hexColor) => {
      const cssColor = hexToCss(hexColor);
      const newCss = this._css ? `${this._css}; color: ${cssColor}` : `color: ${cssColor}`;
      return createBuilder(newCss);
    };
  }
};

styles.rgb = {
  get() {
    return (r, g, b) => {
      const cssColor = rgbToCss(r, g, b);
      const newCss = this._css ? `${this._css}; color: ${cssColor}` : `color: ${cssColor}`;
      return createBuilder(newCss);
    };
  }
};

// Create the prototype object with all styles defined as getters
const proto = Object.defineProperties(() => { }, styles);

// Helper to create a builder function with proper chaining
const createBuilder = (css = '') => {
  const builder = function (str) {
    if (typeof str === 'string') {
      return createStyledResult(str, css);
    }
    return builder; // Return self for chaining
  };

  // Set the prototype to inherit all style methods
  Object.setPrototypeOf(builder, proto);

  // Store the CSS for chaining
  builder._css = css;

  return builder;
};

// Simple chalk-like implementation for browser
const createChalk = () => {
  // Main chalk function
  const chalk = function (str) {
    return str;
  };

  // Set browser mode flag
  chalk.isBrowserMode = true;
  chalk.level = 3; // Full color support

  // Define the main chalk methods directly
  chalk.reset = (str) => createStyledResult(str, '');
  chalk.bold = createBuilder('font-weight: bold');
  chalk.dim = createBuilder('opacity: 0.5');
  chalk.italic = createBuilder('font-style: italic');
  chalk.underline = createBuilder('text-decoration: underline');
  chalk.inverse = createBuilder('filter: invert(100%)');
  chalk.hidden = createBuilder('visibility: hidden');
  chalk.strikethrough = createBuilder('text-decoration: line-through');

  chalk.black = createBuilder('color: #000000');
  chalk.red = createBuilder('color: #ff0000');
  chalk.green = createBuilder('color: #00ff00');
  chalk.yellow = createBuilder('color: #ffff00');
  chalk.blue = createBuilder('color: #0000ff');
  chalk.magenta = createBuilder('color: #ff00ff');
  chalk.cyan = createBuilder('color: #00ffff');
  chalk.white = createBuilder('color: #ffffff');
  chalk.gray = createBuilder('color: #808080');

  chalk.bgBlack = createBuilder('background-color: #000000');
  chalk.bgRed = createBuilder('background-color: #ff0000');
  chalk.bgGreen = createBuilder('background-color: #00ff00');
  chalk.bgYellow = createBuilder('background-color: #ffff00');
  chalk.bgBlue = createBuilder('background-color: #0000ff');
  chalk.bgMagenta = createBuilder('background-color: #ff00ff');
  chalk.bgCyan = createBuilder('background-color: #00ffff');
  chalk.bgWhite = createBuilder('background-color: #ffffff');

  // Hex color method
  chalk.hex = (hexColor) => {
    const cssColor = hexToCss(hexColor);
    return createBuilder(`color: ${cssColor}`);
  };

  // RGB color method
  chalk.rgb = (r, g, b) => {
    const cssColor = rgbToCss(r, g, b);
    return createBuilder(`color: ${cssColor}`);
  };

  return chalk;
};

// Export the browser version
const chalk = createChalk();

// Also export as default for ES modules
export default chalk;

// Also export as named export
export { chalk };