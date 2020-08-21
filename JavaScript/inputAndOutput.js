var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', function(line) {
  var tokens = line.split(' ')
  console.log(parseInt(tokens[0]) + parseInt(tokens[1]) + parseInt(tokens[2]));
})