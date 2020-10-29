const fs = require('fs');

function readFile(url) {

  return fs.readFileSync(url, 'utf8');

};

exports.command = 'convert-to-dynamic <url>';
exports.aliases = ['ctd'];
exports.desc = 'Provide file url <url>';
exports.builder = {};
exports.handler = function (argv) {

  const prefix = 'DECLARE @sql NVARCHAR(MAX) = \'';
  const sufix = "';";

  try {

    const fileData = readFile(argv.url);

    const convertedFileData = prefix + fileData.replace(/'/g, "''") + sufix;
    const newUrl = argv.url.replace('.', '_converted_to_dynamic.');

    fs.writeFileSync(newUrl, convertedFileData);

    console.log('Command successfully executed!');

  } catch (error) {
    
    console.log('Error ' + error);

  }

};