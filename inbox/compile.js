//we have to read the contents of our file of our hard drive
const path = require('path'); /*directory path from compile.js to inbox.sol.
we use this path module for cross platform availability, this will work in
mac, linux, etc*/
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// __dirname is used for the current directory name and then we put contracts
// and inbox.sol
const source = fs.readFileSync(inboxPath, 'utf8');
module.exports = solc.compile(source, 1).contracts[':Inbox'];