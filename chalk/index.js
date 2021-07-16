// Requiring the module
const chalk = require('chalk');

// It is used style a string
console.log(chalk.red('Geeks For Geeks'));

// It is used to combine styled and normal strings
console.log(chalk.yellow('Geeks') + 'For' + chalk.red('Geeks!'));

// Compose multiple styles using the chainable API
console.log(chalk.yellow.bgRed.bold('Geeks For Geeks!'));

// It is used pass in multiple arguments
console.log(chalk.blue('Geeks', 'For', 'Geeks!'));

// It is used to nest the styles
console.log(chalk.red('Geeks',
	chalk.underline.bgBlue('For') + 'Geeks'));
