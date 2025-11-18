import chalk, { Chalk, ChalkInstance, ModifierName, ForegroundColorName, BackgroundColorName, ColorName, ColorSupportLevel } from './index.js'

// Test for the tsd module
const expectType = <T>(value: T) => value
const expectAssignable = <T>(value: any) => value
const expectError = <T>(value: any) => value

// -- Initialization --
expectType<ChalkInstance>(new Chalk({ level: 1 as ColorSupportLevel }))
expectType<ChalkInstance>(new Chalk({ level: 2 as ColorSupportLevel }))
expectType<ChalkInstance>(new Chalk({ level: 3 as ColorSupportLevel }))
expectType<ChalkInstance>(new Chalk({ level: 0 as ColorSupportLevel }))
expectType<ChalkInstance>(new Chalk({ browserMode: true }))
expectType<ChalkInstance>(new Chalk({ browserMode: false }))

// -- Chalk instance --
expectType<ChalkInstance>(chalk)

// -- Level --
expectType<ColorSupportLevel>(chalk.level)

// -- isBrowserMode --
expectType<boolean | undefined>(chalk.isBrowserMode)

// -- Model colors --
expectType<string | [string, string]>(chalk.rgb(0, 0, 0)('foo'))
expectType<string | [string, string]>(chalk.hex('#DEADED')('foo'))
expectType<string | [string, string]>(chalk.ansi256(0)('foo'))
expectType<string | [string, string]>(chalk.bgRgb(0, 0, 0)('foo'))
expectType<string | [string, string]>(chalk.bgHex('#DEADED')('foo'))
expectType<string | [string, string]>(chalk.bgAnsi256(0)('foo'))

// -- Modifiers --
expectType<string | [string, string]>(chalk.reset('foo'))
expectType<string | [string, string]>(chalk.bold('foo'))
expectType<string | [string, string]>(chalk.dim('foo'))
expectType<string | [string, string]>(chalk.italic('foo'))
expectType<string | [string, string]>(chalk.underline('foo'))
expectType<string | [string, string]>(chalk.overline('foo'))
expectType<string | [string, string]>(chalk.inverse('foo'))
expectType<string | [string, string]>(chalk.hidden('foo'))
expectType<string | [string, string]>(chalk.strikethrough('foo'))
expectType<string | [string, string]>(chalk.visible('foo'))
expectType<string | [string, string]>(chalk.reset`foo`)
expectType<string | [string, string]>(chalk.bold`foo`)
expectType<string | [string, string]>(chalk.dim`foo`)
expectType<string | [string, string]>(chalk.italic`foo`)
expectType<string | [string, string]>(chalk.underline`foo`)
expectType<string | [string, string]>(chalk.inverse`foo`)
expectType<string | [string, string]>(chalk.hidden`foo`)
expectType<string | [string, string]>(chalk.strikethrough`foo`)
expectType<string | [string, string]>(chalk.visible`foo`)

// -- Colors --
expectType<string | [string, string]>(chalk.black('foo'))
expectType<string | [string, string]>(chalk.red('foo'))
expectType<string | [string, string]>(chalk.green('foo'))
expectType<string | [string, string]>(chalk.yellow('foo'))
expectType<string | [string, string]>(chalk.blue('foo'))
expectType<string | [string, string]>(chalk.magenta('foo'))
expectType<string | [string, string]>(chalk.cyan('foo'))
expectType<string | [string, string]>(chalk.white('foo'))
expectType<string | [string, string]>(chalk.gray('foo'))
expectType<string | [string, string]>(chalk.grey('foo'))
expectType<string | [string, string]>(chalk.blackBright('foo'))
expectType<string | [string, string]>(chalk.redBright('foo'))
expectType<string | [string, string]>(chalk.greenBright('foo'))
expectType<string | [string, string]>(chalk.yellowBright('foo'))
expectType<string | [string, string]>(chalk.blueBright('foo'))
expectType<string | [string, string]>(chalk.magentaBright('foo'))
expectType<string | [string, string]>(chalk.cyanBright('foo'))
expectType<string | [string, string]>(chalk.whiteBright('foo'))
expectType<string | [string, string]>(chalk.bgBlack('foo'))
expectType<string | [string, string]>(chalk.bgRed('foo'))
expectType<string | [string, string]>(chalk.bgGreen('foo'))
expectType<string | [string, string]>(chalk.bgYellow('foo'))
expectType<string | [string, string]>(chalk.bgBlue('foo'))
expectType<string | [string, string]>(chalk.bgMagenta('foo'))
expectType<string | [string, string]>(chalk.bgCyan('foo'))
expectType<string | [string, string]>(chalk.bgWhite('foo'))
expectType<string | [string, string]>(chalk.bgBlackBright('foo'))
expectType<string | [string, string]>(chalk.bgRedBright('foo'))
expectType<string | [string, string]>(chalk.bgGreenBright('foo'))
expectType<string | [string, string]>(chalk.bgYellowBright('foo'))
expectType<string | [string, string]>(chalk.bgBlueBright('foo'))
expectType<string | [string, string]>(chalk.bgMagentaBright('foo'))
expectType<string | [string, string]>(chalk.bgCyanBright('foo'))
expectType<string | [string, string]>(chalk.bgWhiteBright('foo'))
expectType<string | [string, string]>(chalk.black`foo`)
expectType<string | [string, string]>(chalk.red`foo`)
expectType<string | [string, string]>(chalk.green`foo`)
expectType<string | [string, string]>(chalk.yellow`foo`)
expectType<string | [string, string]>(chalk.blue`foo`)
expectType<string | [string, string]>(chalk.magenta`foo`)
expectType<string | [string, string]>(chalk.cyan`foo`)
expectType<string | [string, string]>(chalk.white`foo`)
expectType<string | [string, string]>(chalk.gray`foo`)
expectType<string | [string, string]>(chalk.grey`foo`)
expectType<string | [string, string]>(chalk.blackBright`foo`)
expectType<string | [string, string]>(chalk.redBright`foo`)
expectType<string | [string, string]>(chalk.greenBright`foo`)
expectType<string | [string, string]>(chalk.yellowBright`foo`)
expectType<string | [string, string]>(chalk.blueBright`foo`)
expectType<string | [string, string]>(chalk.magentaBright`foo`)
expectType<string | [string, string]>(chalk.cyanBright`foo`)
expectType<string | [string, string]>(chalk.whiteBright`foo`)
expectType<string | [string, string]>(chalk.bgBlack`foo`)
expectType<string | [string, string]>(chalk.bgRed`foo`)
expectType<string | [string, string]>(chalk.bgGreen`foo`)
expectType<string | [string, string]>(chalk.bgYellow`foo`)
expectType<string | [string, string]>(chalk.bgBlue`foo`)
expectType<string | [string, string]>(chalk.bgMagenta`foo`)
expectType<string | [string, string]>(chalk.bgCyan`foo`)
expectType<string | [string, string]>(chalk.bgWhite`foo`)
expectType<string | [string, string]>(chalk.bgBlackBright`foo`)
expectType<string | [string, string]>(chalk.bgRedBright`foo`)
expectType<string | [string, string]>(chalk.bgGreenBright`foo`)
expectType<string | [string, string]>(chalk.bgYellowBright`foo`)
expectType<string | [string, string]>(chalk.bgBlueBright`foo`)
expectType<string | [string, string]>(chalk.bgMagentaBright`foo`)
expectType<string | [string, string]>(chalk.bgCyanBright`foo`)
expectType<string | [string, string]>(chalk.bgWhiteBright`foo`)

// -- Complex --
expectType<string | [string, string]>(chalk.red.bgGreen.underline('foo'))
expectType<string | [string, string]>(chalk.underline.red.bgGreen('foo'))

// -- Complex template literal --
expectType<string | [string, string]>(chalk.underline``)
expectType<string | [string, string]>(chalk.red.bgGreen.bold`foo`)
expectType<string | [string, string]>(chalk.strikethrough.cyanBright.bgBlack`foo`)

// -- Modifiers types
expectAssignable<ModifierName>('strikethrough')
// expectError<ModifierName>('delete'); // This would require a more complex setup

// -- Foreground types
expectAssignable<ForegroundColorName>('red')
// expectError<ForegroundColorName>('pink'); // This would require a more complex setup

// -- Background types
expectAssignable<BackgroundColorName>('bgRed')
// expectError<BackgroundColorName>('bgPink'); // This would require a more complex setup

// -- Color types --
expectAssignable<ColorName>('red')
expectAssignable<ColorName>('bgRed')
// expectError<ColorName>('hotpink'); // This would require a more complex setup
// expectError<ColorName>('bgHotpink'); // This would require a more complex setup