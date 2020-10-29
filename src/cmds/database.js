exports.command = 'database <command>';
exports.desc = 'Operation with database';
exports.builder = function (yargs) {
  return yargs.commandDir('database_cmds');
}
exports.handler = function (argv) {};