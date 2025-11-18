/**
 * Type definitions for the browser version of uni-chalk
 */

export interface BrowserChalkInstance {
    (...text: unknown[]): [string, string]

    /**
    Browser mode flag - always true for browser instances
    */
    readonly isBrowserMode: true

    /**
    Level is always 3 for browser instances (full color support)
    */
    readonly level: 3

    /**
    Use RGB values to set text color.

    @example
    ```
    import chalk from 'uni-chalk/browser';

    chalk.rgb(222, 173, 237);
    ```
    */
    rgb: (red: number, green: number, blue: number) => this

    /**
    Use HEX value to set text color.

    @param color - Hexadecimal value representing the desired color.

    @example
    ```
    import chalk from 'uni-chalk/browser';

    chalk.hex('#DEADED');
    ```
    */
    hex: (color: string) => this

    /**
    Use an [8-bit unsigned number](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) to set text color.

    @example
    ```
    import chalk from 'uni-chalk/browser';

    chalk.ansi256(201);
    ```
    */
    ansi256: (index: number) => this

    /**
    Use RGB values to set background color.

    @example
    ```
    import chalk from 'uni-chalk/browser';

    chalk.bgRgb(222, 173, 237);
    ```
    */
    bgRgb: (red: number, green: number, blue: number) => this

    /**
    Use HEX value to set background color.

    @param color - Hexadecimal value representing the desired color.

    @example
    ```
    import chalk from 'uni-chalk/browser';

    chalk.bgHex('#DEADED');
    ```
    */
    bgHex: (color: string) => this

    /**
    Use a [8-bit unsigned number](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) to set background color.

    @example
    ```
    import chalk from 'uni-chalk/browser';

    chalk.bgAnsi256(201);
    ```
    */
    bgAnsi256: (index: number) => this

    /**
    Modifier: Reset the current style.
    */
    readonly reset: this

    /**
    Modifier: Make the text bold.
    */
    readonly bold: this

    /**
    Modifier: Make the text have lower opacity.
    */
    readonly dim: this

    /**
    Modifier: Make the text italic. *(Not widely supported)*
    */
    readonly italic: this

    /**
    Modifier: Put a horizontal line below the text. *(Not widely supported)*
    */
    readonly underline: this

    /**
    Modifier: Put a horizontal line above the text. *(Not widely supported)*
    */
    readonly overline: this

    /**
    Modifier: Invert background and foreground colors.
    */
    readonly inverse: this

    /**
    Modifier: Print the text but make it invisible.
    */
    readonly hidden: this

    /**
    Modifier: Puts a horizontal line through the center of the text. *(Not widely supported)*
    */
    readonly strikethrough: this

    /**
    Modifier: Print the text only when Chalk has a color level above zero.

    Can be useful for things that are purely cosmetic.
    */
    readonly visible: this

    readonly black: this
    readonly red: this
    readonly green: this
    readonly yellow: this
    readonly blue: this
    readonly magenta: this
    readonly cyan: this
    readonly white: this

    /*
    Alias for `blackBright`.
    */
    readonly gray: this

    /*
    Alias for `blackBright`.
    */
    readonly grey: this

    readonly blackBright: this
    readonly redBright: this
    readonly greenBright: this
    readonly yellowBright: this
    readonly blueBright: this
    readonly magentaBright: this
    readonly cyanBright: this
    readonly whiteBright: this

    readonly bgBlack: this
    readonly bgRed: this
    readonly bgGreen: this
    readonly bgYellow: this
    readonly bgBlue: this
    readonly bgMagenta: this
    readonly bgCyan: this
    readonly bgWhite: this

    /*
    Alias for `bgBlackBright`.
    */
    readonly bgGray: this

    /*
    Alias for `bgBlackBright`.
    */
    readonly bgGrey: this

    readonly bgBlackBright: this
    readonly bgRedBright: this
    readonly bgGreenBright: this
    readonly bgYellowBright: this
    readonly bgBlueBright: this
    readonly bgMagentaBright: this
    readonly bgCyanBright: this
    readonly bgWhiteBright: this
}

/**
Browser-specific Chalk object that always returns CSS styling arrays.
*/
declare const chalk: BrowserChalkInstance

export const chalkBrowser: BrowserChalkInstance

export default chalk