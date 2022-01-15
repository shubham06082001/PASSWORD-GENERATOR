const program = require('commander');

program.version('1.0.0').description('Simple Password Generator');

program.option('-l, --length <n>', 'Length of password', 8).parse();

